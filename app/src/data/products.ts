export type Lang = 'fr' | 'en';

export interface Product {
  id: string;
  brand: string;
  name: string;
  ref: string;
  /** null means "price on request" */
  price: number | null;
  img: string;
  featured?: boolean;
  diam: string;
  mvt: Record<Lang, string>;
  mat: Record<Lang, string>;
}

export const BRANDS = ['Rolex', 'Patek Philippe', 'Cartier', 'Omega'] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'dd40', brand: 'Rolex', name: 'Day-Date 40 Everose', ref: 'M228235-0002',
    price: 42500000, img: '/images/products/day-date-40-everose.jpg', featured: true,
    diam: '40 mm',
    mvt: { fr: 'Automatique, cal. 3255', en: 'Automatic, cal. 3255' },
    mat: { fr: 'Or Everose 18 ct', en: '18 ct Everose gold' },
  },
  {
    id: 'gmt', brand: 'Rolex', name: 'GMT-Master II « Pepsi »', ref: 'M126710BLRO',
    price: 15800000, img: '/images/products/gmt-master-ii-pepsi.jpg', featured: true,
    diam: '40 mm',
    mvt: { fr: 'Automatique, cal. 3285', en: 'Automatic, cal. 3285' },
    mat: { fr: 'Acier Oystersteel', en: 'Oystersteel' },
  },
  {
    id: 'rainbow', brand: 'Rolex', name: 'Daytona « Rainbow »', ref: 'M116595RBOW',
    price: null, img: '/images/products/daytona-rainbow.jpg',
    diam: '40 mm',
    mvt: { fr: 'Chronographe, cal. 4130', en: 'Chronograph, cal. 4130' },
    mat: { fr: 'Or Everose, saphirs arc-en-ciel', en: 'Everose gold, rainbow sapphires' },
  },
  {
    id: 'santos', brand: 'Cartier', name: 'Santos Squelette', ref: 'WHSA0015',
    price: 28900000, img: '/images/products/santos-squelette.jpg', featured: true,
    diam: '39,8 mm',
    mvt: { fr: 'Manuel, cal. 9611 MC', en: 'Hand-wound, cal. 9611 MC' },
    mat: { fr: 'Acier', en: 'Steel' },
  },
  {
    id: 'aquanaut', brand: 'Patek Philippe', name: 'Aquanaut Travel Time', ref: '5164A-001',
    price: 36500000, img: '/images/products/aquanaut-travel-time.jpg',
    diam: '40,8 mm',
    mvt: { fr: 'Automatique, cal. 324 S C FUS', en: 'Automatic, cal. 324 S C FUS' },
    mat: { fr: 'Acier, bracelet composite', en: 'Steel, composite strap' },
  },
  {
    id: 'landdweller', brand: 'Rolex', name: 'Land-Dweller Bleu Glacier', ref: 'M127334',
    price: 21400000, img: '/images/products/land-dweller-bleu-glacier.jpg',
    diam: '40 mm',
    mvt: { fr: 'Automatique, cal. 7135', en: 'Automatic, cal. 7135' },
    mat: { fr: 'Acier et or gris', en: 'Steel and white gold' },
  },
  {
    id: 'nautilus-rg', brand: 'Patek Philippe', name: 'Nautilus 5990/1R', ref: '5990/1R-001',
    price: null, img: '/images/products/nautilus-5990-1r.jpg',
    diam: '40,5 mm',
    mvt: { fr: 'Chronographe flyback, Travel Time', en: 'Flyback chronograph, Travel Time' },
    mat: { fr: 'Or rose 18 ct', en: '18 ct rose gold' },
  },
  {
    id: 'nautilus-w', brand: 'Patek Philippe', name: 'Nautilus 5711/1A Blanc', ref: '5711/1A-011',
    price: null, img: '/images/products/nautilus-5711-1a-blanc.jpg',
    diam: '40 mm',
    mvt: { fr: 'Automatique, cal. 26-330 S C', en: 'Automatic, cal. 26-330 S C' },
    mat: { fr: 'Acier', en: 'Steel' },
  },
  {
    id: 'speedy', brand: 'Omega', name: "Speedmaster '57 Vert", ref: '332.12.41.51.10.001',
    price: 8900000, img: '/images/products/speedmaster-57-vert.jpg', featured: true,
    diam: '40,5 mm',
    mvt: { fr: 'Manuel, Co-Axial cal. 9906', en: 'Hand-wound, Co-Axial cal. 9906' },
    mat: { fr: 'Acier, cuir vert', en: 'Steel, green leather' },
  },
  {
    id: 'nautilus-b', brand: 'Patek Philippe', name: 'Nautilus 5711/1A Bleu', ref: '5711/1A-010',
    price: null, img: '/images/products/nautilus-5711-1a-bleu.jpg',
    diam: '40 mm',
    mvt: { fr: 'Automatique, cal. 26-330 S C', en: 'Automatic, cal. 26-330 S C' },
    mat: { fr: 'Acier', en: 'Steel' },
  },
];

export function formatPrice(n: number): string {
  return n.toLocaleString('fr-FR').replace(/ | /g, ' ') + ' FCFA';
}
