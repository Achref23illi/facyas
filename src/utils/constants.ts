// Constants for the skincare website

export const SITE_CONFIG = {
  name: 'Facyas',
  description: 'Premium skincare products for radiant skin',
  url: 'https://facyas.com',
  ogImage: 'https://facyas.com/og.jpg',
  email: 'hello@facyas.com',
  phone: '+1 (555) 123-4567',
  address: '123 Beauty Street, Skincare City, SC 12345',
} as const;

export const NAVIGATION = {
  main: [
    { name: 'MAGASINEZ', href: '/shop' },
    { name: 'À PROPOS', href: '/about' },
    { name: 'TROUVER UNE CLINIQUE', href: '/find-clinic' },
    { name: 'PROFESSIONNELS', href: '/professionals' },
  ],
  footer: [
    {
      title: 'Products',
      links: [
        { name: 'Cleansers', href: '/products/cleansers' },
        { name: 'Moisturizers', href: '/products/moisturizers' },
        { name: 'Serums', href: '/products/serums' },
        { name: 'Sunscreens', href: '/products/sunscreens' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Story', href: '/story' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
        { name: 'Size Guide', href: '/size-guide' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Accessibility', href: '/accessibility' },
      ],
    },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
    { name: 'TikTok', href: '#', icon: 'tiktok' },
  ],
} as const;

export const PRODUCT_CATEGORIES = [
  {
    id: 'cleansers',
    name: 'Cleansers',
    description: 'Gentle cleansing for all skin types',
    image: '/images/categories/cleansers.jpg',
  },
  {
    id: 'moisturizers',
    name: 'Moisturizers',
    description: 'Hydrating formulas for soft, supple skin',
    image: '/images/categories/moisturizers.jpg',
  },
  {
    id: 'serums',
    name: 'Serums',
    description: 'Targeted treatments for specific concerns',
    image: '/images/categories/serums.jpg',
  },
  {
    id: 'sunscreens',
    name: 'Sunscreens',
    description: 'Broad-spectrum protection',
    image: '/images/categories/sunscreens.jpg',
  },
  {
    id: 'masks',
    name: 'Face Masks',
    description: 'Weekly treatments for glowing skin',
    image: '/images/categories/masks.jpg',
  },
  {
    id: 'tools',
    name: 'Tools & Accessories',
    description: 'Skincare tools and applicators',
    image: '/images/categories/tools.jpg',
  },
] as const;

export const SKIN_TYPES = [
  { id: 'normal', name: 'Normal', description: 'Balanced, not too oily or dry' },
  { id: 'oily', name: 'Oily', description: 'Prone to excess oil and shine' },
  { id: 'dry', name: 'Dry', description: 'Lacking moisture and hydration' },
  { id: 'combination', name: 'Combination', description: 'Oily T-zone, dry cheeks' },
  { id: 'sensitive', name: 'Sensitive', description: 'Easily irritated, reactive' },
  { id: 'mature', name: 'Mature', description: 'Signs of aging, loss of elasticity' },
] as const;

export const SKIN_CONCERNS = [
  { id: 'acne', name: 'Acne & Blemishes' },
  { id: 'aging', name: 'Anti-Aging' },
  { id: 'dark-spots', name: 'Dark Spots' },
  { id: 'dryness', name: 'Dryness' },
  { id: 'dullness', name: 'Dullness' },
  { id: 'fine-lines', name: 'Fine Lines' },
  { id: 'large-pores', name: 'Large Pores' },
  { id: 'redness', name: 'Redness' },
  { id: 'sensitivity', name: 'Sensitivity' },
  { id: 'uneven-texture', name: 'Uneven Texture' },
] as const;

export const API_ENDPOINTS = {
  products: '/api/products',
  categories: '/api/categories',
  reviews: '/api/reviews',
  newsletter: '/api/newsletter',
  contact: '/api/contact',
  cart: '/api/cart',
  checkout: '/api/checkout',
  user: '/api/user',
  wishlist: '/api/wishlist',
} as const;

export const LOCAL_STORAGE_KEYS = {
  cart: 'facyas_cart',
  wishlist: 'facyas_wishlist',
  user: 'facyas_user',
  theme: 'facyas_theme',
  recently_viewed: 'facyas_recently_viewed',
} as const;

export const CURRENCY = {
  code: 'USD',
  symbol: '$',
  locale: 'en-US',
} as const;

export const ANIMATIONS = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  scaleIn: 'animate-scale-in',
} as const; 