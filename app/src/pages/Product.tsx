import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../store';
import { PRODUCTS, thumb } from '../data/products';
import { BackIcon, ShieldIcon } from '../components/Icons';

export default function Product() {
  const { id } = useParams();
  const { t, lang, priceText, showPrice, addToCart, cart } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [added, setAdded] = useState(false);
  const [requested, setRequested] = useState(false);
  const [shot, setShot] = useState(0);

  /** Revenir au premier cliché quand on passe d'une pièce à l'autre. */
  useEffect(() => setShot(0), [id]);

  /**
   * Dépile l'historique quand on arrive depuis le site : on retrouve la
   * boutique avec son filtre et sa position de défilement, et le bouton retour
   * du navigateur ne renvoie pas dans la fiche qu'on vient de quitter.
   * `key === 'default'` = entrée directe sur cette URL, il n'y a rien à dépiler.
   */
  const goBack = () => {
    if (location.key === 'default') navigate('/collection');
    else navigate(-1);
  };

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
        <button type="button" className="backlink" onClick={goBack}>
          <BackIcon size={14} />
          <span>{t.back}</span>
        </button>
      </div>
      <div className="product__grid">
        <div className="product__gallery">
          <div className="product__imgwrap">
            <img src={p.imgs[Math.min(shot, p.imgs.length - 1)]} alt={p.name} />
          </div>
          {p.imgs.length > 1 && (
            <div className="product__thumbs">
              {p.imgs.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={'thumb' + (i === shot ? ' thumb--active' : '')}
                  onClick={() => setShot(i)}
                  aria-label={`${p.name} — ${i + 1}/${p.imgs.length}`}
                >
                  <img src={thumb(src)} alt="" loading="lazy" decoding="async" />
                </button>
              ))}
            </div>
          )}
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
