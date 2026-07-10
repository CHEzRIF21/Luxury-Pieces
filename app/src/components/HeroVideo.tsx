import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';

export default function HeroVideo() {
  const { t } = useStore();
  const navigate = useNavigate();

  return (
    <section className="hero">
      <video
        className="hero__video"
        src="/videos/hero-dark.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero/hero-angle-1.jpg"
      />
      <div className="hero__scrim" />
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
