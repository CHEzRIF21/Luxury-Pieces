import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { HeroVideoSlot } from './SiteVideo';

export default function HeroVideo() {
  const { t } = useStore();
  const navigate = useNavigate();

  return (
    <section className="hero">
      <HeroVideoSlot className="hero-video-slot" />
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
