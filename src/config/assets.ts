// Assets configuration for the skincare website

export const ASSETS = {
  // Logos
  logo: '/logo.png',
  
  // Icons (can be expanded as needed)
  icons: {
    vite: '/vite.svg',
  },
  
  // Images (placeholder structure for future use)
  images: {
    categories: {
      cleansers: '/images/categories/cleansers.jpg',
      moisturizers: '/images/categories/moisturizers.jpg',
      serums: '/images/categories/serums.jpg',
      sunscreens: '/images/categories/sunscreens.jpg',
      masks: '/images/categories/masks.jpg',
      tools: '/images/categories/tools.jpg',
    },
    hero: {
      main: '/images/hero/hero-bg.jpg',
      secondary: '/images/hero/hero-secondary.jpg',
    },
    products: {
      placeholder: '/images/products/placeholder.jpg',
    },
  },
  
  // Fonts (Google Fonts URLs)
  fonts: {
    inter: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
    playfair: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap',
  },
  
  // Carousel images
  carousel: {
    slide1: '/carousel1.png',
    slide2: '/carousel2.png',
  },
  
  // Category showcase images
  showcase: {
    show1: '/show1.png',
    show2: '/show2.png',
    show3: '/show3.png',
  },
  
  // Media logos
  media: {
    forbes: 'https://cdn.brandfetch.io/idP48RNgRN/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    today: 'https://cdn.brandfetch.io/idyaAgn1gL/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    elle: 'https://cdn.brandfetch.io/id69H2OP30/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    chatelaine: 'https://cdn.brandfetch.io/idUbMRWBNZ/w/535/h/67/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B',
    people: 'https://cdn.brandfetch.io/idKB-d9rE9/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
  },
  
  // Product images
  products: {
    perfectly_face_cream: '/perfectly_face_cream.png',
    perfectly_oil: '/perfectly_oil.png',
    perfectly_soap: '/perfectly_soap.png',
    perfectly_face_serum: '/perfectly_face_serum.png',
    glutathione_soap: '/glutathione_soap.png',
    glutathione_face_serum: '/glutathione_face_serum.png',
    perfectly_body_lotion: '/perfectly_body_lotion.png',
    rose_multi_use_oil: '/rose_multi_use_oil.png',
    glutathione_collagen: '/glutathione_collagen.png',
    retinol_glutathione_cream: '/retinol_glutathione_cream.png',
    super_sunscreen: '/super_sunscreen.png',
    glutathione_vitamin_c_lotion: '/glutathione_vitamin_c_lotion.png',
    exfoliating_gloves: '/exfoliating_gloves.png',
    black_glove: '/black_glove.jpg',
    rose_glove: '/rose_glove.jpg',
  },
  
  // Placeholder images for fallback
  placeholders: {
    product: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    hero: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  }
} as const;

export type AssetsType = typeof ASSETS;

// Helper function to get product image path
export const getProductImage = (productKey: keyof typeof ASSETS.products): string => {
  return ASSETS.products[productKey];
};

// Helper function to get asset path
export const getAssetPath = (path: string): string => {
  return path.startsWith('/') ? path : `/${path}`;
}; 