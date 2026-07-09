# Luxury Pièces — Premium Watches

Boutique de montres de luxe, mobile-first et bilingue FR/EN, implémentée en React + Vite + TypeScript à partir du design Claude Design « Luxury Pièces ».

## Lancer en local (Windows / Mac / Linux)

Prérequis : [Node.js](https://nodejs.org) 20 ou plus récent.

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173.

## Build de production

```bash
npm run build
npm run preview   # prévisualiser le build
```

Le site généré se trouve dans `dist/` — hébergeable sur n'importe quel hébergement statique (Vercel, Netlify, etc.). Le routeur utilise l'historique HTML5 : configurer le fallback SPA vers `index.html` sur l'hébergeur.

## Structure

- `src/data/products.ts` — les 10 pièces du catalogue (prix `null` = « prix sur demande »)
- `src/data/i18n.ts` — tous les textes FR/EN
- `src/store.tsx` — langue, panier (persistés en localStorage), mode vitrine
- `src/index.css` — design système : noir `#0A0908`, or champagne `#E5A94E`, Cormorant Garamond + Montserrat, breakpoint desktop à 920 px
- `src/pages/` — Accueil (héro 360°), Collection (filtres par maison), Fiche produit, Panier (panier → coordonnées → confirmation), Maison
- `public/images/` — photos produits, frames du héro 360°, logo
- `public/fonts/` — polices auto-hébergées (aucune dépendance CDN)

## Configuration

Dans `src/store.tsx` :

- `VITRINE` — passer à `true` pour masquer tous les prix (« prix sur demande » partout)
- `DEFAULT_LANG` — langue par défaut (`'fr'` ou `'en'`)
