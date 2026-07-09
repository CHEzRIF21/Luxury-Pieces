import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useStore } from '../store';
import { PRODUCTS } from '../data/products';
import { BackIcon, ShieldIcon } from '../components/Icons';

export default function Product() {
  const { id } = useParams();
  const { t, lang, priceText, showPrice, addToCart, cart } = useStore();
  const [added, setAdded] = useState(false);
  const [requested, setRequested] = useState(false);

  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return <Navigate to="/collection" replace />;

  const inCart = cart.includes(p.id);
  const specs = [
    { label: t.sBrand, value: p.brand },
    { label: t.sDiam, value: p.diam },
    { label: t.sMvt, value: p.mvt[lang] },
    { label: t.sMat, value: p.mat[lang] },
    { label: t.sCond, value: t.condVal },
  ];

  return (
    <main>
      <div className="product__back">
        <Link to="/collection" className="backlink">
          <BackIcon size={14} />
          <span>{t.back}</span>
        </Link>
      </div>
      <div className="product__grid">
        <div className="product__imgwrap">
          <img src={p.img} alt={p.name} />
        </div>
        <div className="product__info">
          <div className="product__head">
            <div className="product__brand">{p.brand}</div>
            <h1 className="product__name">{p.name}</h1>
            <div className="product__ref">Réf. {p.ref}</div>
          </div>

          {showPrice(p) ? (
            <div className="product__buy">
              <div className="product__price">{priceText(p)}</div>
              <button
                className={'btn-primary' + (added || inCart ? ' btn-primary--added' : '')}
                onClick={() => {
                  addToCart(p.id);
                  setAdded(true);
                }}
              >
                {added || inCart ? t.added : t.addCart}
              </button>
            </div>
          ) : (
            <div className="product__buy">
              <div className="product__onrequest">{t.onRequest}</div>
              <button className="btn-outline" onClick={() => setRequested(true)}>
                {t.askPrice}
              </button>
              {requested && <div className="product__requestsent">{t.requestSent}</div>}
            </div>
          )}

          <div className="product__specs">
            {specs.map((r) => (
              <div key={r.label} className="specrow">
                <span className="specrow__label">{r.label}</span>
                <span className="specrow__value">{r.value}</span>
              </div>
            ))}
          </div>
          <div className="reassurance" style={{ marginTop: 6 }}>
            <ShieldIcon size={15} stroke="#E5A94E" />
            <span>{t.reassurance}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
