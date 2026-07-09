import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { PRODUCTS, formatPrice } from '../data/products';
import { BackIcon, CheckIcon, CloseIcon, EmptyCartIcon, ShieldIcon } from '../components/Icons';

type Step = 'cart' | 'form' | 'done';

export default function Cart() {
  const { t, cart, removeFromCart, clearCart, priceText } = useStore();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('cart');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState(false);

  const items = cart
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p) => p != null);
  const total = items.reduce((sum, p) => sum + (p.price ?? 0), 0);
  const totalText = formatPrice(total);

  const confirmOrder = () => {
    if (name.trim() && phone.trim()) {
      setError(false);
      clearCart();
      setStep('done');
      window.scrollTo(0, 0);
    } else {
      setError(true);
    }
  };

  if (step === 'done') {
    return (
      <main className="cart">
        <div className="cart__done">
          <div className="cart__donecircle">
            <CheckIcon size={26} stroke="#E5A94E" />
          </div>
          <div className="cart__donetitle">{t.doneTitle}</div>
          <p className="cart__donetext">{t.doneText}</p>
          <button
            className="btn-outline btn-outline--small"
            style={{ marginTop: 8, alignSelf: 'center' }}
            onClick={() => navigate('/')}
          >
            {t.doneCta}
          </button>
        </div>
      </main>
    );
  }

  if (step === 'form') {
    return (
      <main className="cart">
        <button className="backlink" onClick={() => setStep('cart')}>
          <BackIcon size={14} />
          <span>{t.cartTitle}</span>
        </button>
        <h1 className="cart__formtitle">{t.formTitle}</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <label className="field">
            <span className="field__label">{t.fName}</span>
            <input
              className="field__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="—"
            />
          </label>
          <label className="field">
            <span className="field__label">{t.fPhone}</span>
            <input
              className="field__input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+225 —"
            />
          </label>
          <label className="field">
            <span className="field__label">{t.fCity}</span>
            <input
              className="field__input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="—"
            />
          </label>
        </div>
        <div className="cart__formtotal">
          <span className="cart__totallabel">{t.total}</span>
          <span className="cart__totalvalue">{totalText}</span>
        </div>
        {error && <div className="cart__error">{t.formErr}</div>}
        <button className="btn-primary" onClick={confirmOrder}>
          {t.confirm}
        </button>
      </main>
    );
  }

  return (
    <main className="cart">
      <h1 className="page-title">{t.cartTitle}</h1>

      {items.length === 0 ? (
        <div className="cart__empty">
          <EmptyCartIcon size={34} stroke="#9C7A3E" strokeWidth={1.2} />
          <p className="cart__emptytext">{t.empty}</p>
          <button
            className="btn-outline btn-outline--small"
            style={{ alignSelf: 'center' }}
            onClick={() => navigate('/collection')}
          >
            {t.emptyCta}
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div className="cart__items">
            {items.map((p) => (
              <div key={p.id} className="citem">
                <div className="citem__img">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="citem__body">
                  <div className="citem__brand">{p.brand}</div>
                  <div className="citem__name">{p.name}</div>
                  <div className="citem__price">{priceText(p)}</div>
                </div>
                <button
                  className="citem__remove"
                  onClick={() => removeFromCart(p.id)}
                  aria-label="Remove"
                >
                  <CloseIcon size={15} />
                </button>
              </div>
            ))}
          </div>
          <div className="cart__total">
            <span className="cart__totallabel">{t.total}</span>
            <span className="cart__totalvalue">{totalText}</span>
          </div>
          <div className="cart__delivery">
            <ShieldIcon size={15} stroke="#E5A94E" />
            <span>{t.delivery}</span>
          </div>
          <button
            className="btn-primary"
            onClick={() => {
              setError(false);
              setStep('form');
              window.scrollTo(0, 0);
            }}
          >
            {t.checkout}
          </button>
        </div>
      )}
    </main>
  );
}
