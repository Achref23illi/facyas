import type { Product } from '../data/products';

export const searchProducts = (products: Product[], query: string): Product[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase().trim();
  
  return products.filter(product => {
    // Search in product name
    const nameMatch = product.name.toLowerCase().includes(searchTerm);
    
    // Search in category
    const categoryMatch = getCategoryLabel(product.category).toLowerCase().includes(searchTerm);
    
    // Search in skin types
    const skinTypeMatch = product.skinType.some(type => 
      getSkinTypeLabel(type).toLowerCase().includes(searchTerm)
    );
    
    // Search in description
    const descriptionMatch = product.description?.toLowerCase().includes(searchTerm) || false;
    
    // Search for specific keywords
    const keywordMatch = searchKeywords(product, searchTerm);
    
    return nameMatch || categoryMatch || skinTypeMatch || descriptionMatch || keywordMatch;
  });
};

const getCategoryLabel = (category: string): string => {
  const categoryMap: Record<string, string> = {
    'cleanser': 'Nettoyant',
    'serum': 'Sérum',
    'moisturizer': 'Hydratant Crème',
    'oil': 'Huile',
    'sunscreen': 'Protection solaire Écran solaire',
    'body': 'Corps Lotion',
    'supplement': 'Complément Collagène'
  };
  return categoryMap[category] || category;
};

const getSkinTypeLabel = (skinType: string): string => {
  const skinTypeMap: Record<string, string> = {
    'dry': 'Peau sèche',
    'oily': 'Peau grasse',
    'normal': 'Peau normale',
    'combination': 'Peau mixte',
    'mature': 'Peau mature',
    'all': 'Tous types'
  };
  return skinTypeMap[skinType] || skinType;
};

const searchKeywords = (product: Product, searchTerm: string): boolean => {
  const keywords: Record<string, string[]> = {
    // Ingredient keywords
    'glutathione': ['glutathione', 'antioxydant', 'éclat'],
    'retinol': ['retinol', 'anti-âge', 'rides'],
    'vitamine c': ['vitamin c', 'vitamine c', 'éclat', 'antioxydant'],
    'collagène': ['collagen', 'collagène', 'fermeté', 'anti-âge'],
    'rose': ['rose', 'hydratant', 'apaisant'],
    
    // Skin concerns
    'acné': ['soap', 'cleanser', 'nettoyant'],
    'anti-âge': ['retinol', 'collagen', 'cream', 'serum'],
    'hydratation': ['cream', 'lotion', 'oil', 'hydratant'],
    'protection': ['sunscreen', 'protection'],
    'éclat': ['glutathione', 'vitamin c', 'serum'],
    
    // Product types
    'crème': ['cream', 'moisturizer'],
    'sérum': ['serum'],
    'huile': ['oil'],
    'savon': ['soap', 'cleanser'],
    'lotion': ['lotion'],
    'écran solaire': ['sunscreen'],
  };
  
  // Check if search term matches any keyword category
  for (const [keyword, productKeywords] of Object.entries(keywords)) {
    if (searchTerm.includes(keyword)) {
      return productKeywords.some(pk => 
        product.name.toLowerCase().includes(pk) || 
        product.category.toLowerCase().includes(pk)
      );
    }
  }
  
  return false;
};

export const getSearchSuggestions = (products: Product[], query: string): string[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase().trim();
  const suggestions = new Set<string>();
  
  products.forEach(product => {
    // Add matching product names
    if (product.name.toLowerCase().includes(searchTerm)) {
      suggestions.add(product.name);
    }
    
    // Add matching categories
    const categoryLabel = getCategoryLabel(product.category);
    if (categoryLabel.toLowerCase().includes(searchTerm)) {
      suggestions.add(categoryLabel);
    }
  });
  
  return Array.from(suggestions).slice(0, 5);
}; 