import { Link, useSearchParams } from 'react-router-dom';
import { useStore } from '../store';
import { BRANDS, PRODUCTS } from '../data/products';

export default function Collection() {
  const { t, priceText } = useStore();
  const [params, setParams] = useSearchParams();

  const raw = params.get('maison');
  const filter = BRANDS.find((b) => b === raw) ?? 'all';
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.brand === filter);

  const chips = [{ key: 'all', name: t.all }, ...BRANDS.map((b) => ({ key: b, name: b }))];

  return (
    <main className="shop">
      <div>
        <h1 className="page-title">{t.shopTitle}</h1>
        <div className="shop__count">
          {filtered.length} {t.piecesWord}
        </div>
      </div>
      <div className="shop__filters">
        {chips.map((c) => (
          <button
            key={c.key}
            className={'fchip' + (filter === c.key ? ' fchip--active' : '')}
            onClick={() =>
              setParams(c.key === 'all' ? {} : { maison: c.key }, { replace: true })
            }
          >
            {c.name}
          </button>
        ))}
      </div>
      <div className="shop__grid">
        {filtered.map((p) => (
          <Link key={p.id} to={`/product/${p.id}`} className="gcard">
            <div className="gcard__img">
              <img src={p.img} alt={p.name} loading="lazy" />
            </div>
            <div className="gcard__body">
              <div className="gcard__brand">{p.brand}</div>
              <div className="gcard__name">{p.name}</div>
              <div className="gcard__price">{priceText(p)}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
