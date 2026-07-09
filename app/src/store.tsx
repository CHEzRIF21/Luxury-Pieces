import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Lang, Product } from './data/products';
import { PRODUCTS, formatPrice } from './data/products';
import { DICT, type Dict } from './data/i18n';

/** Mode vitrine : true = tous les prix masqués (prix sur demande partout). */
const VITRINE = false;
const DEFAULT_LANG: Lang = 'fr';

interface Store {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  vitrine: boolean;
  cart: string[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  priceText: (p: Product) => string;
  showPrice: (p: Product) => boolean;
}

const StoreContext = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lp-lang');
    return saved === 'fr' || saved === 'en' ? saved : DEFAULT_LANG;
  });
  const [cart, setCart] = useState<string[]>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('lp-cart') ?? '[]');
      return Array.isArray(saved) ? saved.filter((id) => PRODUCTS.some((p) => p.id === id)) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => localStorage.setItem('lp-lang', lang), [lang]);
  useEffect(() => localStorage.setItem('lp-cart', JSON.stringify(cart)), [cart]);

  const value = useMemo<Store>(() => {
    const showPrice = (p: Product) => !VITRINE && p.price != null;
    return {
      lang,
      setLang,
      t: DICT[lang],
      vitrine: VITRINE,
      cart,
      addToCart: (id) => setCart((c) => (c.includes(id) ? c : [...c, id])),
      removeFromCart: (id) => setCart((c) => c.filter((x) => x !== id)),
      clearCart: () => setCart([]),
      showPrice,
      priceText: (p) => (showPrice(p) ? formatPrice(p.price!) : DICT[lang].onRequest),
    };
  }, [lang, cart]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): Store {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}
