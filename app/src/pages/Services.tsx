import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';

export default function Services() {
  const { t } = useStore();
  const navigate = useNavigate();

  const services = [
    { num: '01', title: t.v1t, text: t.v1x },
    { num: '02', title: t.v2t, text: t.v2x },
    { num: '03', title: t.v3t, text: t.v3x },
    { num: '04', title: t.s4t, text: t.s4x },
  ];

  return (
    <main>
      <div className="about__body">
        <div className="kicker">
          <div className="kicker__line" />
          <div className="kicker__text">LUXURY PIECES</div>
        </div>
        <h1 className="about__title">{t.servicesTitle}</h1>
        <p className="about__p1">{t.servicesIntro}</p>
        <div className="about__values">
          {services.map((s) => (
            <div key={s.num} className="value">
              <div className="value__num">{s.num}</div>
              <div className="value__body">
                <div className="value__title">{s.title}</div>
                <div className="value__text">{s.text}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="about__contact">
          <div className="about__contacttitle">{t.contactTitle}</div>
          <p className="about__contacttext">{t.contactText}</p>
          <button className="about__contactcta" onClick={() => navigate('/collection')}>
            {t.heroCta}
          </button>
        </div>
      </div>
    </main>
  );
}
