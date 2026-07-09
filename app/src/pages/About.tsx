import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';

export default function About() {
  const { t } = useStore();
  const navigate = useNavigate();

  const values = [
    { num: '01', title: t.v1t, text: t.v1x },
    { num: '02', title: t.v2t, text: t.v2x },
    { num: '03', title: t.v3t, text: t.v3x },
  ];

  return (
    <main>
      <div className="about__hero">
        <img
          className="about__heroimg"
          src="/images/products/speedmaster-57-vert.jpg"
          alt="Omega Speedmaster"
        />
        <div className="about__heroscrim" />
        <div className="about__herocontent">
          <div className="kicker">
            <div className="kicker__line" />
            <div className="kicker__text">Luxury Pièces</div>
          </div>
          <h1 className="about__title">{t.aboutTitle}</h1>
        </div>
      </div>
      <div className="about__body">
        <p className="about__p1">{t.aboutP1}</p>
        <p className="about__p2">{t.aboutP2}</p>
        <div className="about__values">
          {values.map((v) => (
            <div key={v.num} className="value">
              <div className="value__num">{v.num}</div>
              <div className="value__body">
                <div className="value__title">{v.title}</div>
                <div className="value__text">{v.text}</div>
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
