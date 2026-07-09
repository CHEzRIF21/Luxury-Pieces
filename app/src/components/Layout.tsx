import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from '../store';
import { CartIcon, HomeIcon, HouseIcon, WatchIcon } from './Icons';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function Header() {
  const { t, lang, setLang, cart } = useStore();
  const { pathname } = useLocation();
  const shopActive = pathname.startsWith('/collection') || pathname.startsWith('/product');

  const navLinkClass = (active: boolean) =>
    'header__navlink' + (active ? ' header__navlink--active' : '');

  return (
    <header className="header">
      <Link to="/" className="header__brand">
        <div className="header__logo">Luxury Pièces.</div>
        <div className="header__tagline">Premium Watches</div>
      </Link>
      <div className="header__right">
        <nav className="header__nav">
          <NavLink to="/" className={({ isActive }) => navLinkClass(isActive)}>
            {t.navHome}
          </NavLink>
          <NavLink to="/collection" className={() => navLinkClass(shopActive)}>
            {t.navShop}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => navLinkClass(isActive)}>
            {t.navAbout}
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              'header__cart' + (isActive ? ' header__cart--active' : '')
            }
            aria-label={t.navCart}
          >
            <CartIcon size={19} />
            {cart.length > 0 && <span className="badge">{cart.length}</span>}
          </NavLink>
        </nav>
        <div className="langswitch">
          <button
            className={'langswitch__btn' + (lang === 'fr' ? ' langswitch__btn--active' : '')}
            onClick={() => setLang('fr')}
          >
            FR
          </button>
          <button
            className={'langswitch__btn' + (lang === 'en' ? ' langswitch__btn--active' : '')}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

function BottomNav() {
  const { t, cart } = useStore();
  const { pathname } = useLocation();
  const shopActive = pathname.startsWith('/collection') || pathname.startsWith('/product');

  const itemClass = (active: boolean) =>
    'bottomnav__item' + (active ? ' bottomnav__item--active' : '');

  return (
    <nav className="bottomnav">
      <NavLink to="/" className={({ isActive }) => itemClass(isActive)}>
        <HomeIcon />
        <span className="bottomnav__label">{t.navHome}</span>
      </NavLink>
      <NavLink to="/collection" className={() => itemClass(shopActive)}>
        <WatchIcon />
        <span className="bottomnav__label">{t.navShop}</span>
      </NavLink>
      <NavLink to="/cart" className={({ isActive }) => itemClass(isActive)}>
        <CartIcon />
        {cart.length > 0 && <span className="bottomnav__badge">{cart.length}</span>}
        <span className="bottomnav__label">{t.navCart}</span>
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => itemClass(isActive)}>
        <HouseIcon />
        <span className="bottomnav__label">{t.navAbout}</span>
      </NavLink>
    </nav>
  );
}

export default function Layout() {
  return (
    <div className="shell">
      <ScrollToTop />
      <Header />
      <Outlet />
      <BottomNav />
    </div>
  );
}
