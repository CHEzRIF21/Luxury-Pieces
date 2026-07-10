import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { BRANDS, PRODUCTS } from '../data/products';
import HeroVideo from '../components/HeroVideo';

export default function Home() {
  const { t, priceText } = useStore();
  const navigate = useNavigate();

  const featured = PRODUCTS.filter((p) => p.featured);
  const rare = PRODUCTS.filter((p) => p.price == null).slice(0, 3);

  return (
    <main>
      <HeroVideo />

      <section className="houses">
        <div className="houses__label">{t.housesLabel}</div>
        <div className="houses__row">
          {BRANDS.map((b) => (
            <button
              key={b}
              className="chip"
              onClick={() => navigate(`/collection?maison=${encodeURIComponent(b)}`)}
            >
              {b}
            </button>
          ))}
        </div>
      </section>

      <section className="featured">
        <div className="featured__head">
          <h2 className="section-title">{t.featuredLabel}</h2>
          <Link to="/collection" className="featured__seeall">
            {t.seeAll}
          </Link>
        </div>
        <div className="featured__row">
          {featured.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="pcard">
              <div className="pcard__img">
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
              <div className="pcard__body">
                <div className="pcard__brand">{p.brand}</div>
                <div className="pcard__name">{p.name}</div>
                <div className="pcard__price">{priceText(p)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rare">
        <div className="rare__intro">
          <h2 className="section-title">{t.rareLabel}</h2>
          <p className="rare__sub">{t.rareSub}</p>
        </div>
        <div className="rare__grid">
          {rare.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="rcard">
              <div className="rcard__img">
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
              <div className="rcard__body">
                <div className="pcard__brand">{p.brand}</div>
                <div className="rcard__name">{p.name}</div>
                <div className="tag-onrequest">{t.onRequest}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="teaser">
        <div className="kicker">
          <div className="kicker__line" />
          <div className="kicker__text" style={{ letterSpacing: '.3em' }}>
            LUXURY PIECES
          </div>
        </div>
        <h2 className="teaser__title">{t.aboutTeaserTitle}</h2>
        <p className="teaser__text">{t.aboutTeaserText}</p>
        <Link to="/about" className="link-underline">
          {t.learnMore}
        </Link>
      </section>
    </main>
  );
}
