export type Lang = 'fr' | 'en';

export interface Product {
  id: string;
  brand: string;
  name: string;
  ref: string;
  /** null means "price on request" */
  price: number | null;
  /** Gallery: first image is the cover shown in the grids. */
  imgs: string[];
  featured?: boolean;
  /** Haute horlogerie : alimente la section « Pièces rares » de l'accueil. */
  rare?: boolean;
  diam: string;
  mvt: Record<Lang, string>;
  mat: Record<Lang, string>;
}

export const BRANDS = [
  'Rolex',
  'Patek Philippe',
  'Audemars Piguet',
  'Cartier',
  'Omega',
  'Tissot',
  'Casio',
  'Poedagar',
] as const;

export const PRODUCTS: Product[] = [
  // ---------------------------------------------------------------- ROLEX --
  {
    id: 'dd40', brand: 'Rolex', name: 'Day-Date 40 Everose', ref: 'M228235-0002',
    price: 42500000, featured: true, rare: true,
    imgs: ['/images/products/day-date-40-everose.jpg'],
    diam: '40 mm',
    mvt: { fr: 'Automatique, cal. 3255', en: 'Automatic, cal. 3255' },
    mat: { fr: 'Or Everose 18 ct', en: '18 ct Everose gold' },
  },
  {
    id: 'gmt', brand: 'Rolex', name: 'GMT-Master II « Pepsi »', ref: 'M126710BLRO',
    price: 15800000, featured: true, rare: true,
    imgs: ['/images/products/gmt-master-ii-pepsi.jpg'],
    diam: '40 mm',
    mvt: { fr: 'Automatique, cal. 3285', en: 'Automatic, cal. 3285' },
    mat: { fr: 'Acier Oystersteel', en: 'Oystersteel' },
  },
  {
    id: 'rainbow', brand: 'Rolex', name: 'Daytona « Rainbow »', ref: 'M116595RBOW',
    price: null, rare: true,
    imgs: [
      '/images/products/daytona-rainbow.jpg',
      '/images/catalogue/rolex-daytona-rainbow/1.jpg',
    ],
    diam: '40 mm',
    mvt: { fr: 'Chronographe, cal. 4130', en: 'Chronograph, cal. 4130' },
    mat: { fr: 'Or Everose, saphirs arc-en-ciel', en: 'Everose gold, rainbow sapphires' },
  },
  {
    id: 'landdweller', brand: 'Rolex', name: 'Land-Dweller 40 Bleu Glacier', ref: 'M127334-0001',
    price: 21400000, featured: true,
    imgs: [
      '/images/products/land-dweller-bleu-glacier.jpg',
      '/images/catalogue/rolex-land-dweller-glacier/1.jpg',
      '/images/catalogue/rolex-land-dweller-glacier/2.jpg',
    ],
    diam: '40 mm',
    mvt: { fr: 'Automatique, cal. 7135', en: 'Automatic, cal. 7135' },
    mat: { fr: 'Acier et or gris', en: 'Steel and white gold' },
  },
  {
    id: 'landdweller-everose', brand: 'Rolex', name: 'Land-Dweller 40 Or Everose', ref: 'M127335-0001',
    price: null, rare: true,
    imgs: ['/images/catalogue/rolex-land-dweller-everose/1.jpg'],
    diam: '40 mm',
    mvt: { fr: 'Automatique, cal. 7135', en: 'Automatic, cal. 7135' },
    mat: { fr: 'Or Everose 18 ct', en: '18 ct Everose gold' },
  },

  // -------------------------------------------------------- PATEK PHILIPPE --
  {
    id: 'aquanaut', brand: 'Patek Philippe', name: 'Aquanaut Travel Time', ref: '5164A-001',
    price: 36500000, rare: true,
    imgs: [
      '/images/products/aquanaut-travel-time.jpg',
      '/images/catalogue/patek-aquanaut-5164a/1.jpg',
    ],
    diam: '40,8 mm',
    mvt: { fr: 'Automatique, cal. 324 S C FUS', en: 'Automatic, cal. 324 S C FUS' },
    mat: { fr: 'Acier, bracelet composite', en: 'Steel, composite strap' },
  },
  {
    id: 'aquanaut-5168g', brand: 'Patek Philippe', name: 'Aquanaut 5168G Kaki', ref: '5168G-010',
    price: null, rare: true,
    imgs: ['/images/catalogue/patek-aquanaut-5168g/1.jpg'],
    diam: '42,2 mm',
    mvt: { fr: 'Automatique, cal. 324 S C', en: 'Automatic, cal. 324 S C' },
    mat: { fr: 'Or gris 18 ct, bracelet composite kaki', en: '18 ct white gold, khaki composite strap' },
  },
  {
    id: 'aquanaut-5968g', brand: 'Patek Philippe', name: 'Aquanaut Chronographe Bleu', ref: '5968G-001',
    price: null, rare: true,
    imgs: ['/images/catalogue/patek-aquanaut-chrono-5968g/1.jpg'],
    diam: '42,2 mm',
    mvt: { fr: 'Chronographe flyback, cal. CH 28-520 C', en: 'Flyback chronograph, cal. CH 28-520 C' },
    mat: { fr: 'Or gris 18 ct, bracelet composite bleu', en: '18 ct white gold, blue composite strap' },
  },
  {
    id: 'aquanaut-5968a', brand: 'Patek Philippe', name: 'Aquanaut Chronographe Orange', ref: '5968A-001',
    price: null, rare: true,
    imgs: ['/images/catalogue/patek-aquanaut-chrono-5968a/1.jpg'],
    diam: '42,2 mm',
    mvt: { fr: 'Chronographe flyback, cal. CH 28-520 C', en: 'Flyback chronograph, cal. CH 28-520 C' },
    mat: { fr: 'Acier, bracelet composite orange', en: 'Steel, orange composite strap' },
  },
  {
    id: 'nautilus-w', brand: 'Patek Philippe', name: 'Nautilus 5711/1A Blanc', ref: '5711/1A-011',
    price: null, rare: true,
    imgs: [
      '/images/products/nautilus-5711-1a-blanc.jpg',
      '/images/catalogue/patek-nautilus-5711-blanc/1.jpg',
    ],
    diam: '40 mm',
    mvt: { fr: 'Automatique, cal. 26-330 S C', en: 'Automatic, cal. 26-330 S C' },
    mat: { fr: 'Acier', en: 'Steel' },
  },
  {
    id: 'nautilus-b', brand: 'Patek Philippe', name: 'Nautilus 5711/1A Bleu', ref: '5711/1A-010',
    price: null, rare: true,
    imgs: [
      '/images/products/nautilus-5711-1a-bleu.jpg',
      '/images/catalogue/patek-nautilus-5711-bleu/1.avif',
      '/images/catalogue/patek-nautilus-5711-bleu/2.jpg',
    ],
    diam: '40 mm',
    mvt: { fr: 'Automatique, cal. 26-330 S C', en: 'Automatic, cal. 26-330 S C' },
    mat: { fr: 'Acier', en: 'Steel' },
  },
  {
    id: 'nautilus-v', brand: 'Patek Philippe', name: 'Nautilus 5711/1A Vert Olive', ref: '5711/1A-014',
    price: null, rare: true,
    imgs: ['/images/catalogue/patek-nautilus-5711-vert/1.jpg'],
    diam: '40 mm',
    mvt: { fr: 'Automatique, cal. 26-330 S C', en: 'Automatic, cal. 26-330 S C' },
    mat: { fr: 'Acier', en: 'Steel' },
  },
  {
    id: 'nautilus-rg', brand: 'Patek Philippe', name: 'Nautilus 5990/1R', ref: '5990/1R-001',
    price: null, rare: true,
    imgs: ['/images/products/nautilus-5990-1r.jpg'],
    diam: '40,5 mm',
    mvt: { fr: 'Chronographe flyback, Travel Time', en: 'Flyback chronograph, Travel Time' },
    mat: { fr: 'Or rose 18 ct', en: '18 ct rose gold' },
  },
  {
    id: 'nautilus-5712', brand: 'Patek Philippe', name: 'Nautilus 5712/1R Or Rose', ref: '5712/1R-001',
    price: null, rare: true,
    imgs: ['/images/catalogue/patek-nautilus-5712/1.avif'],
    diam: '40 mm',
    mvt: { fr: 'Automatique, phase de lune et réserve de marche', en: 'Automatic, moon phase and power reserve' },
    mat: { fr: 'Or rose 18 ct', en: '18 ct rose gold' },
  },

  // ------------------------------------------------------- AUDEMARS PIGUET --
  {
    id: 'ro-ceramique', brand: 'Audemars Piguet',
    name: 'Royal Oak Squelette Céramique Bleue', ref: '15416CE',
    price: null, rare: true,
    imgs: ['/images/catalogue/ap-royal-oak-squelette-ceramique/1.avif'],
    diam: '41 mm',
    mvt: { fr: 'Automatique squelette, Double Balancier', en: 'Openworked automatic, Double Balance Wheel' },
    mat: { fr: 'Céramique bleue, or rose 18 ct', en: 'Blue ceramic, 18 ct rose gold' },
  },
  {
    id: 'ro-bleu', brand: 'Audemars Piguet', name: 'Royal Oak Sélection Bleue', ref: '15500ST-01',
    price: null, featured: true, rare: true,
    imgs: ['/images/catalogue/ap-royal-oak-bleu/1.avif'],
    diam: '41 mm',
    mvt: { fr: 'Automatique, cal. 4302', en: 'Automatic, cal. 4302' },
    mat: { fr: 'Acier, cadran Grande Tapisserie bleu', en: 'Steel, blue Grande Tapisserie dial' },
  },
  {
    id: 'ro-argente', brand: 'Audemars Piguet', name: 'Royal Oak Argenté', ref: '15500ST-04',
    price: null, rare: true,
    imgs: ['/images/catalogue/ap-royal-oak-argente/1.avif'],
    diam: '41 mm',
    mvt: { fr: 'Automatique, cal. 4302', en: 'Automatic, cal. 4302' },
    mat: { fr: 'Acier, cadran Grande Tapisserie argenté', en: 'Steel, silver-toned Grande Tapisserie dial' },
  },

  // -------------------------------------------------------------- CARTIER --
  {
    id: 'santos', brand: 'Cartier', name: 'Santos Squelette', ref: 'WHSA0015',
    price: 28900000, featured: true, rare: true,
    imgs: ['/images/products/santos-squelette.jpg'],
    diam: '39,8 mm',
    mvt: { fr: 'Manuel, cal. 9611 MC', en: 'Hand-wound, cal. 9611 MC' },
    mat: { fr: 'Acier', en: 'Steel' },
  },

  // ---------------------------------------------------------------- OMEGA --
  {
    id: 'speedy', brand: 'Omega', name: "Speedmaster '57 Vert", ref: '332.12.41.51.10.001',
    price: 8900000, featured: true,
    imgs: [
      '/images/products/speedmaster-57-vert.jpg',
      '/images/catalogue/omega-speedmaster-57-vert/1.jpg',
    ],
    diam: '40,5 mm',
    mvt: { fr: 'Manuel, Co-Axial cal. 9906', en: 'Hand-wound, Co-Axial cal. 9906' },
    mat: { fr: 'Acier, cuir vert', en: 'Steel, green leather' },
  },
  {
    id: 'speedy-bordeaux', brand: 'Omega', name: "Speedmaster '57 Bordeaux", ref: '332.12.41.51.11.001',
    price: 8900000,
    imgs: ['/images/catalogue/omega-speedmaster-57-bordeaux/1.jpg'],
    diam: '40,5 mm',
    mvt: { fr: 'Manuel, Co-Axial cal. 9906', en: 'Hand-wound, Co-Axial cal. 9906' },
    mat: { fr: 'Acier, cuir bordeaux', en: 'Steel, burgundy leather' },
  },
  {
    id: 'speedy-noir', brand: 'Omega', name: "Speedmaster '57 Noir", ref: '332.12.41.51.01.001',
    price: 8900000,
    imgs: ['/images/catalogue/omega-speedmaster-57-noir/1.jpg'],
    diam: '40,5 mm',
    mvt: { fr: 'Manuel, Co-Axial cal. 9906', en: 'Hand-wound, Co-Axial cal. 9906' },
    mat: { fr: 'Acier, cuir brun', en: 'Steel, brown leather' },
  },
  {
    id: 'speedy-bleu', brand: 'Omega', name: "Speedmaster '57 Bleu", ref: '332.12.41.51.03.001',
    price: 8900000,
    imgs: ['/images/catalogue/omega-speedmaster-57-bleu/1.jpg'],
    diam: '40,5 mm',
    mvt: { fr: 'Manuel, Co-Axial cal. 9906', en: 'Hand-wound, Co-Axial cal. 9906' },
    mat: { fr: 'Acier, cuir bleu', en: 'Steel, blue leather' },
  },

  // --------------------------------------------------- TISSOT PRX (auto) ---
  {
    id: 'prx-a-glacier', brand: 'Tissot', name: 'PRX Powermatic 80 Bleu Glacier', ref: 'T137.407.11.351.00',
    price: 455000, featured: true,
    imgs: ['/images/catalogue/tissot-prx-auto-glacier/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Automatique, Powermatic 80', en: 'Automatic, Powermatic 80' },
    mat: { fr: 'Acier 316L, bracelet intégré', en: '316L steel, integrated bracelet' },
  },
  {
    id: 'prx-a-bleu', brand: 'Tissot', name: 'PRX Powermatic 80 Bleu', ref: 'T137.407.11.351.01',
    price: 455000,
    imgs: ['/images/catalogue/tissot-prx-auto-bleu/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Automatique, Powermatic 80', en: 'Automatic, Powermatic 80' },
    mat: { fr: 'Acier 316L, bracelet intégré', en: '316L steel, integrated bracelet' },
  },
  {
    id: 'prx-a-vert', brand: 'Tissot', name: 'PRX Powermatic 80 Vert', ref: 'T137.407.11.091.00',
    price: 455000,
    imgs: ['/images/catalogue/tissot-prx-auto-vert/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Automatique, Powermatic 80', en: 'Automatic, Powermatic 80' },
    mat: { fr: 'Acier 316L, bracelet intégré', en: '316L steel, integrated bracelet' },
  },
  {
    id: 'prx-a-nuit', brand: 'Tissot', name: 'PRX Powermatic 80 Bleu Nuit', ref: 'T137.407.11.051.01',
    price: 455000,
    imgs: ['/images/catalogue/tissot-prx-auto-nuit/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Automatique, Powermatic 80', en: 'Automatic, Powermatic 80' },
    mat: { fr: 'Acier 316L, bracelet intégré', en: '316L steel, integrated bracelet' },
  },
  {
    id: 'prx-a-bicolore', brand: 'Tissot', name: 'PRX Powermatic 80 Bicolore', ref: 'T137.407.21.031.00',
    price: 520000,
    imgs: ['/images/catalogue/tissot-prx-auto-bicolore/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Automatique, Powermatic 80', en: 'Automatic, Powermatic 80' },
    mat: { fr: 'Acier et PVD or rose', en: 'Steel and rose gold PVD' },
  },
  {
    id: 'prx-a-or', brand: 'Tissot', name: 'PVD Or Powermatic 80', ref: 'T137.407.33.021.00',
    price: 555000,
    imgs: ['/images/catalogue/tissot-prx-auto-or/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Automatique, Powermatic 80', en: 'Automatic, Powermatic 80' },
    mat: { fr: 'Acier PVD or jaune', en: 'Yellow gold PVD steel' },
  },
  {
    id: 'prx-a-or-rose', brand: 'Tissot', name: 'PRX Powermatic 80 Or Rose', ref: 'T137.407.33.041.00',
    price: 555000,
    imgs: ['/images/catalogue/tissot-prx-auto-or-rose/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Automatique, Powermatic 80', en: 'Automatic, Powermatic 80' },
    mat: { fr: 'Acier PVD or rose, cadran bleu', en: 'Rose gold PVD steel, blue dial' },
  },
  {
    id: 'prx-a-noir', brand: 'Tissot', name: 'PRX Powermatic 80 Noir', ref: 'T137.407.17.051.00',
    price: 470000,
    imgs: ['/images/catalogue/tissot-prx-auto-noir/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Automatique, Powermatic 80', en: 'Automatic, Powermatic 80' },
    mat: { fr: 'Acier, bracelet caoutchouc noir', en: 'Steel, black rubber strap' },
  },
  {
    id: 'prx-chrono', brand: 'Tissot', name: 'PRX Chronographe Automatique', ref: 'T137.427.11.011.01',
    price: 1250000, featured: true,
    imgs: ['/images/catalogue/tissot-prx-chrono/1.webp'],
    diam: '42 mm',
    mvt: { fr: 'Chronographe automatique, Valjoux A05.H31', en: 'Automatic chronograph, Valjoux A05.H31' },
    mat: { fr: 'Acier 316L, cadran panda', en: '316L steel, panda dial' },
  },

  // ------------------------------------------------- TISSOT PRX (quartz) ---
  {
    id: 'prx-q-rouge', brand: 'Tissot', name: 'PRX 40 Quartz Rouge', ref: 'T137.410.11.421.00',
    price: 265000,
    imgs: ['/images/catalogue/tissot-prx-quartz-rouge/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Quartz', en: 'Quartz' },
    mat: { fr: 'Acier 316L, bracelet intégré', en: '316L steel, integrated bracelet' },
  },
  {
    id: 'prx-q-vert', brand: 'Tissot', name: 'PRX 40 Quartz Vert', ref: 'T137.410.11.091.00',
    price: 265000,
    imgs: ['/images/catalogue/tissot-prx-quartz-vert/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Quartz', en: 'Quartz' },
    mat: { fr: 'Acier 316L, bracelet intégré', en: '316L steel, integrated bracelet' },
  },
  {
    id: 'prx-q-noir', brand: 'Tissot', name: 'PRX 40 Quartz Noir', ref: 'T137.410.11.051.00',
    price: 265000,
    imgs: ['/images/catalogue/tissot-prx-quartz-noir/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Quartz', en: 'Quartz' },
    mat: { fr: 'Acier 316L, bracelet intégré', en: '316L steel, integrated bracelet' },
  },
  {
    id: 'prx-q-argent', brand: 'Tissot', name: 'PRX 40 Quartz Argenté', ref: 'T137.410.11.031.00',
    price: 265000,
    imgs: [
      '/images/catalogue/tissot-prx-quartz-argent/1.webp',
      '/images/catalogue/tissot-prx-quartz-argent/2.jpg',
    ],
    diam: '40 mm',
    mvt: { fr: 'Quartz', en: 'Quartz' },
    mat: { fr: 'Acier 316L, index or rose', en: '316L steel, rose gold indexes' },
  },
  {
    id: 'prx-q-blanc', brand: 'Tissot', name: 'PRX 40 Quartz Blanc', ref: 'T137.410.17.011.00',
    price: 280000,
    imgs: ['/images/catalogue/tissot-prx-quartz-blanc/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Quartz', en: 'Quartz' },
    mat: { fr: 'Acier, bracelet caoutchouc blanc', en: 'Steel, white rubber strap' },
  },

  // ---------------------------------------------------------------- CASIO --
  {
    id: 'casio-rose', brand: 'Casio', name: 'MTP-B145D Rose', ref: 'MTP-B145D-4A',
    price: 55000,
    imgs: ['/images/catalogue/casio-mtp-b145d-rose/1.jpg'],
    diam: '40,5 mm',
    mvt: { fr: 'Quartz, étanche 50 m', en: 'Quartz, 50 m water resistant' },
    mat: { fr: 'Acier, cadran rose', en: 'Steel, pink dial' },
  },
  {
    id: 'casio-vert', brand: 'Casio', name: 'MTP-B145D Vert', ref: 'MTP-B145D-3A',
    price: 55000, featured: true,
    imgs: ['/images/catalogue/casio-mtp-b145d-vert/1.jpg'],
    diam: '40,5 mm',
    mvt: { fr: 'Quartz, étanche 50 m', en: 'Quartz, 50 m water resistant' },
    mat: { fr: 'Acier, cadran vert', en: 'Steel, green dial' },
  },
  {
    id: 'casio-rouge', brand: 'Casio', name: 'MTP-B145D Rouge', ref: 'MTP-B145D-4A2',
    price: 55000,
    imgs: ['/images/catalogue/casio-mtp-b145d-rouge/1.jpg'],
    diam: '40,5 mm',
    mvt: { fr: 'Quartz, étanche 50 m', en: 'Quartz, 50 m water resistant' },
    mat: { fr: 'Acier, cadran rouge', en: 'Steel, red dial' },
  },
  {
    id: 'casio-jaune', brand: 'Casio', name: 'MTP-B145D Jaune', ref: 'MTP-B145D-9A',
    price: 55000,
    imgs: ['/images/catalogue/casio-mtp-b145d-jaune/1.jpg'],
    diam: '40,5 mm',
    mvt: { fr: 'Quartz, étanche 50 m', en: 'Quartz, 50 m water resistant' },
    mat: { fr: 'Acier, cadran jaune', en: 'Steel, yellow dial' },
  },
  {
    id: 'casio-noir-bleu', brand: 'Casio', name: 'MTP-B145 Noir & Bleu', ref: 'MTP-B145B-2A',
    price: 62000,
    imgs: ['/images/catalogue/casio-mtp-b145b-bleu/1.jpg'],
    diam: '40,5 mm',
    mvt: { fr: 'Quartz, étanche 50 m', en: 'Quartz, 50 m water resistant' },
    mat: { fr: 'Acier IP noir, cadran bleu', en: 'Black IP steel, blue dial' },
  },
  {
    id: 'casio-or-vert', brand: 'Casio', name: 'MTP-B145G Or & Vert', ref: 'MTP-B145G-3A',
    price: 68000,
    imgs: ['/images/catalogue/casio-mtp-b145g-vert/1.webp'],
    diam: '40,5 mm',
    mvt: { fr: 'Quartz, étanche 50 m', en: 'Quartz, 50 m water resistant' },
    mat: { fr: 'Acier doré, cadran vert', en: 'Gold-tone steel, green dial' },
  },
  {
    id: 'casio-champagne', brand: 'Casio', name: 'MTP-B145G Champagne', ref: 'MTP-B145G-9A',
    price: 68000,
    imgs: ['/images/catalogue/casio-mtp-b145g-champagne/1.avif'],
    diam: '40,5 mm',
    mvt: { fr: 'Quartz, étanche 50 m', en: 'Quartz, 50 m water resistant' },
    mat: { fr: 'Acier doré, cadran champagne', en: 'Gold-tone steel, champagne dial' },
  },

  // ------------------------------------------------------------- POEDAGAR --
  {
    id: 'poedagar-613-bleu', brand: 'Poedagar', name: '613 Acier Bleu', ref: 'PD-613-SB',
    price: 45000, featured: true,
    imgs: ['/images/catalogue/poedagar-613-bleu/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Quartz, étanche 30 m', en: 'Quartz, 30 m water resistant' },
    mat: { fr: 'Acier, bracelet intégré', en: 'Steel, integrated bracelet' },
  },
  {
    id: 'poedagar-613-vert', brand: 'Poedagar', name: '613 Acier Vert', ref: 'PD-613-SG',
    price: 45000,
    imgs: ['/images/catalogue/poedagar-613-vert/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Quartz, étanche 30 m', en: 'Quartz, 30 m water resistant' },
    mat: { fr: 'Acier, bracelet intégré', en: 'Steel, integrated bracelet' },
  },
  {
    id: 'poedagar-613-blanc', brand: 'Poedagar', name: '613 Acier Blanc', ref: 'PD-613-SW',
    price: 45000,
    imgs: ['/images/catalogue/poedagar-613-blanc/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Quartz, étanche 30 m', en: 'Quartz, 30 m water resistant' },
    mat: { fr: 'Acier, bracelet intégré', en: 'Steel, integrated bracelet' },
  },
  {
    id: 'poedagar-613-or', brand: 'Poedagar', name: '613 Or & Bleu', ref: 'PD-613-GB',
    price: 49000,
    imgs: ['/images/catalogue/poedagar-613-or-bleu/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Quartz, étanche 30 m', en: 'Quartz, 30 m water resistant' },
    mat: { fr: 'Acier doré, cadran bleu', en: 'Gold-tone steel, blue dial' },
  },
  {
    id: 'poedagar-930-bleu', brand: 'Poedagar', name: '930 Acier Bleu', ref: 'PD-930-SB',
    price: 39000,
    imgs: ['/images/catalogue/poedagar-930-bleu/1.jpg'],
    diam: '40 mm',
    mvt: { fr: 'Quartz jour-date', en: 'Quartz, day-date' },
    mat: { fr: 'Acier, bracelet intégré', en: 'Steel, integrated bracelet' },
  },
  {
    id: 'poedagar-930-vert', brand: 'Poedagar', name: '930 Acier Vert', ref: 'PD-930-SG',
    price: 39000,
    imgs: ['/images/catalogue/poedagar-930-vert/1.jpg'],
    diam: '40 mm',
    mvt: { fr: 'Quartz jour-date', en: 'Quartz, day-date' },
    mat: { fr: 'Acier, bracelet intégré', en: 'Steel, integrated bracelet' },
  },
  {
    id: 'poedagar-930-blanc', brand: 'Poedagar', name: '930 Acier Blanc', ref: 'PD-930-SW',
    price: 39000,
    imgs: ['/images/catalogue/poedagar-930-blanc/1.webp'],
    diam: '40 mm',
    mvt: { fr: 'Quartz jour-date', en: 'Quartz, day-date' },
    mat: { fr: 'Acier, bracelet intégré', en: 'Steel, integrated bracelet' },
  },
  {
    id: 'poedagar-930-or', brand: 'Poedagar', name: '930 Or Champagne', ref: 'PD-930-GC',
    price: 43000,
    imgs: ['/images/catalogue/poedagar-930-or/1.jpg'],
    diam: '40 mm',
    mvt: { fr: 'Quartz jour-date', en: 'Quartz, day-date' },
    mat: { fr: 'Acier doré, cadran champagne', en: 'Gold-tone steel, champagne dial' },
  },
];

export function formatPrice(n: number): string {
  return n.toLocaleString('fr-FR').replace(/ | /g, ' ') + ' FCFA';
}
