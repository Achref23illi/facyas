import { ASSETS } from '../config/assets';
import { Product } from '../types';

export const allProducts: Product[] = [
  {
    id: '13',
    name: 'EXFOLIATING GLOVES',
    price: 19.99,
    rating: 4.4,
    reviewCount: 64,
    image: ASSETS.products.exfoliating_gloves,
    category: 'tools',
    skinType: ['all'],
    description: 'Gants exfoliants pour un gommage doux et efficace de la peau'
  },
  {
    id: '1',
    name: 'PERFECTLY FACE CREAM',
    price: 55.00,
    rating: 4.8,
    reviewCount: 243,
    image: ASSETS.products.perfectly_face_cream,
    badge: 'BEST SELLER',
    category: 'moisturizer',
    skinType: ['dry', 'normal'],
    description: 'Crème hydratante anti-âge pour le visage'
  },
  {
    id: '2',
    name: 'GLUTATHIONE FACE SERUM',
    price: 124.00,
    rating: 4.7,
    reviewCount: 158,
    image: ASSETS.products.glutathione_face_serum,
    category: 'serum',
    skinType: ['all'],
    description: 'Sérum éclat au glutathione pour tous types de peau'
  },
  {
    id: '3',
    name: 'SUPER SUNSCREEN',
    price: 45.00,
    rating: 4.9,
    reviewCount: 120,
    image: ASSETS.products.super_sunscreen,
    badge: 'PROTECTION',
    category: 'sunscreen',
    skinType: ['all'],
    description: 'Protection solaire haute performance SPF 50+'
  },
  {
    id: '4',
    name: 'ROSE MULTI USE OIL',
    price: 40.00,
    rating: 4.6,
    reviewCount: 86,
    image: ASSETS.products.rose_multi_use_oil,
    category: 'oil',
    skinType: ['dry', 'mature'],
    description: 'Huile multi-usage à la rose pour peau sèche et mature'
  },
  {
    id: '5',
    name: 'PERFECTLY SOAP',
    price: 55.00,
    rating: 4.5,
    reviewCount: 312,
    image: ASSETS.products.perfectly_soap,
    category: 'cleanser',
    skinType: ['oily', 'combination'],
    description: 'Savon nettoyant pour peaux grasses et mixtes'
  },
  {
    id: '6',
    name: 'GLUTATHIONE SOAP',
    price: 50.00,
    rating: 4.4,
    reviewCount: 198,
    image: ASSETS.products.glutathione_soap,
    category: 'cleanser',
    skinType: ['all'],
    description: 'Savon au glutathione pour un teint éclatant'
  },
  {
    id: '7',
    name: 'PERFECTLY BODY LOTION',
    price: 50.00,
    rating: 4.7,
    reviewCount: 267,
    image: ASSETS.products.perfectly_body_lotion,
    category: 'body',
    skinType: ['dry', 'normal'],
    description: 'Lotion corporelle hydratante pour peau douce'
  },
  {
    id: '8',
    name: 'GLUTATHIONE COLLAGEN',
    price: 289.00,
    originalPrice: 320.00,
    rating: 4.8,
    reviewCount: 156,
    image: ASSETS.products.glutathione_collagen,
    badge: 'PROMO',
    category: 'supplement',
    skinType: ['mature'],
    isOnSale: true,
    description: 'Complément anti-âge au glutathione et collagène'
  },
  {
    id: '9',
    name: 'RETINOL GLUTATHIONE CREAM',
    price: 234.00,
    rating: 4.6,
    reviewCount: 89,
    image: ASSETS.products.retinol_glutathione_cream,
    category: 'moisturizer',
    skinType: ['mature', 'combination'],
    description: 'Crème anti-âge au rétinol et glutathione'
  },
  {
    id: '10',
    name: 'PERFECTLY OIL',
    price: 45.00,
    rating: 4.5,
    reviewCount: 134,
    image: ASSETS.products.perfectly_oil,
    category: 'oil',
    skinType: ['dry', 'normal'],
    description: 'Huile nourrissante pour visage et corps'
  },
  {
    id: '11',
    name: 'PERFECTLY FACE SERUM',
    price: 45.00,
    rating: 4.7,
    reviewCount: 203,
    image: ASSETS.products.perfectly_face_serum,
    category: 'serum',
    skinType: ['all'],
    description: 'Sérum hydratant et réparateur pour le visage'
  },
  {
    id: '12',
    name: 'GLUTATHIONE VITAMIN C LOTION',
    price: 156.00,
    rating: 4.6,
    reviewCount: 178,
    image: ASSETS.products.glutathione_vitamin_c_lotion,
    category: 'moisturizer',
    skinType: ['normal', 'combination'],
    description: 'Lotion éclat au glutathione et vitamine C'
  },
  {
    id: '14',
    name: 'GAMME COMPLETE PERFECTLY',
    price: 250.00,
    originalPrice: 300.00,
    rating: 4.9,
    reviewCount: 89,
    image: ASSETS.products.perfectly_face_cream,
    badge: 'BUNDLE',
    category: 'bundle',
    skinType: ['all'],
    isOnSale: true,
    description: 'Gamme complète de soins Perfectly - Économisez 50$ CAD'
  },
  // Curcuma Products
  {
    id: '15',
    name: 'CURCUMA FACIAL CLEANSER 200ML',
    price: 28.80,
    rating: 4.6,
    reviewCount: 142,
    image: ASSETS.products.curcuma_facial_cleanser,
    category: 'cleanser',
    skinType: ['all'],
    description: 'Nettoyant facial au curcuma pour une peau éclatante'
  },
  {
    id: '16',
    name: 'CURCUMA TONER 200ML FACIAL',
    price: 25.99,
    rating: 4.5,
    reviewCount: 98,
    image: ASSETS.products.curcuma_toner,
    category: 'toner',
    skinType: ['all'],
    description: 'Tonique facial au curcuma pour équilibrer la peau'
  },
  {
    id: '17',
    name: 'SÉRUM FACIAL CURCUMA 60ML',
    price: 30.00,
    rating: 4.7,
    reviewCount: 156,
    image: ASSETS.products.curcuma_serum_facial,
    category: 'serum',
    skinType: ['all'],
    description: 'Sérum facial au curcuma anti-inflammatoire'
  },
  {
    id: '18',
    name: 'CURCUMA FACIAL OIL 60ML',
    price: 22.00,
    rating: 4.4,
    reviewCount: 87,
    image: ASSETS.products.curcuma_facial_oil,
    category: 'oil',
    skinType: ['dry', 'normal'],
    description: 'Huile faciale au curcuma nourrissante'
  },
  {
    id: '19',
    name: 'CURCUMA VISAGE CREAM 100G',
    price: 35.00,
    rating: 4.8,
    reviewCount: 203,
    image: ASSETS.products.curcuma_visage_cream,
    category: 'moisturizer',
    skinType: ['all'],
    description: 'Crème visage au curcuma hydratante et apaisante'
  },
  {
    id: '20',
    name: 'CURCUMA BOUE FACIALE MASK 150G',
    price: 33.00,
    rating: 4.6,
    reviewCount: 124,
    image: ASSETS.products.curcuma_boue_faciale,
    category: 'mask',
    skinType: ['oily', 'combination'],
    description: 'Masque de boue faciale au curcuma purifiant'
  },
  {
    id: '21',
    name: 'CURCUMA GOMMAGE POUR LE CORPS 500G',
    price: 42.00,
    rating: 4.5,
    reviewCount: 167,
    image: ASSETS.products.curcuma_gommage_corps,
    category: 'body',
    skinType: ['all'],
    description: 'Gommage corporel au curcuma exfoliant'
  },
  {
    id: '22',
    name: 'CURCUMA CORPS BUTTER 350G',
    price: 38.00,
    rating: 4.7,
    reviewCount: 189,
    image: ASSETS.products.curcuma_beurre_corps,
    category: 'body',
    skinType: ['dry', 'normal'],
    description: 'Beurre corporel au curcuma ultra-hydratant'
  },
  {
    id: '23',
    name: 'CURCUMA SOAP 100G',
    price: 25.00,
    rating: 4.4,
    reviewCount: 234,
    image: ASSETS.products.curcuma_soap,
    category: 'cleanser',
    skinType: ['all'],
    description: 'Savon au curcuma naturel et purifiant'
  }
];

export const categories = [
  { value: 'all', label: 'Tous les produits' },
  { value: 'cleanser', label: 'Nettoyants' },
  { value: 'toner', label: 'Toniques' },
  { value: 'serum', label: 'Sérums' },
  { value: 'moisturizer', label: 'Hydratants' },
  { value: 'oil', label: 'Huiles' },
  { value: 'mask', label: 'Masques' },
  { value: 'sunscreen', label: 'Protection solaire' },
  { value: 'body', label: 'Corps' },
  { value: 'tools', label: 'Accessoires' },
  { value: 'supplement', label: 'Compléments' },
  { value: 'bundle', label: 'Ensembles' }
]; 