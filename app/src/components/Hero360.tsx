import { useEffect, useRef, useState } from 'react';
import type { PointerEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { RotateIcon } from './Icons';

const FRAMES = [
  '/images/hero/hero-angle-1.jpg',
  '/images/hero/hero-angle-3.jpg',
  '/images/hero/hero-angle-2.jpg',
  '/images/hero/hero-angle-6.jpg',
  '/images/hero/hero-angle-4.jpg',
];

const AUTO_MS = 3000;
const RESUME_MS = 2600;

export default function Hero360() {
  const { t } = useStore();
  const navigate = useNavigate();
  const [frame, setFrame] = useState(0);
  const [hold, setHold] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (hold) return;
    const spin = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), AUTO_MS);
    return () => clearInterval(spin);
  }, [hold]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  const scrub = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const idx = Math.max(
      0,
      Math.min(FRAMES.length - 1, Math.floor(((e.clientX - r.left) / r.width) * FRAMES.length)),
    );
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setHold(false), RESUME_MS);
    setFrame(idx);
    setHold(true);
  };

  return (
    <section className="hero" onPointerMove={scrub}>
      {FRAMES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Patek Philippe Nautilus"
          className="hero__frame"
          draggable={false}
          style={{
            opacity: i === frame ? 1 : 0,
            transition: hold ? 'opacity .16s linear' : 'opacity 1s ease',
          }}
        />
      ))}
      <div className="hero__scrim" />
      <div className="hero__hint">
        <RotateIcon size={12} />
        <span>{t.heroHint}</span>
      </div>
      <div className="hero__content">
        <div className="kicker">
          <div className="kicker__line" />
          <div className="kicker__text">{t.heroLabel}</div>
        </div>
        <h1 className="hero__title">{t.heroTitle}</h1>
        <p className="hero__sub">{t.heroSub}</p>
        <button className="hero__cta" onClick={() => navigate('/collection')}>
          {t.heroCta}
        </button>
      </div>
    </section>
  );
}
