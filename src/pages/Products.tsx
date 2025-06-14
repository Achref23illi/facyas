import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Star, Filter, Grid, List, ChevronDown, Search } from 'lucide-react';
import Button from '../components/common/Button';
import AddToCartButton from '../components/ui/AddToCartButton';
import { allProducts } from '../data/products';
import { SITE_CONFIG } from '../utils/constants';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSkinType, setSelectedSkinType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement[]>([]);

  // Update document title
  useEffect(() => {
    document.title = `Produits - ${SITE_CONFIG.name}`;
  }, []);

  // Handle URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      // Map URL categories to internal categories
      const categoryMap: Record<string, string> = {
        'anti-aging': 'moisturizer',
        'acne': 'cleanser',
        'brightening': 'serum'
      };
      
      const mappedCategory = categoryMap[categoryParam] || categoryParam;
      setSelectedCategory(mappedCategory);
      
      // Scroll to top when coming from category showcase
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchParams]);

  const categories = [
    { value: 'all', label: 'Tous les produits' },
    { value: 'cleanser', label: 'Nettoyants' },
    { value: 'serum', label: 'Sérums' },
    { value: 'moisturizer', label: 'Hydratants' },
    { value: 'oil', label: 'Huiles' },
    { value: 'sunscreen', label: 'Protection solaire' },
    { value: 'body', label: 'Corps' },
    { value: 'supplement', label: 'Compléments' }
  ];

  const skinTypes = [
    { value: 'all', label: 'Tous types de peau' },
    { value: 'dry', label: 'Peau sèche' },
    { value: 'oily', label: 'Peau grasse' },
    { value: 'combination', label: 'Peau mixte' },
    { value: 'normal', label: 'Peau normale' },
    { value: 'mature', label: 'Peau mature' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Produits vedettes' },
    { value: 'price-low', label: 'Prix croissant' },
    { value: 'price-high', label: 'Prix décroissant' },
    { value: 'rating', label: 'Mieux notés' },
    { value: 'newest', label: 'Nouveautés' }
  ];

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSkinType = selectedSkinType === 'all' || 
        product.skinType.includes(selectedSkinType) || 
        product.skinType.includes('all');
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSkinType && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return parseInt(b.id) - parseInt(a.id);
        default:
          return 0;
      }
    });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      gsap.fromTo(productsRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProducts]);

  const handleProductHover = (index: number, isEntering: boolean) => {
    const product = productsRef.current[index];
    if (!product) return;

    const image = product.querySelector('.product-image');
    const overlay = product.querySelector('.product-overlay');
    const button = product.querySelector('.add-to-cart-btn');

    if (isEntering) {
      gsap.to(image, { scale: 1.05, duration: 0.4, ease: "power2.out" });
      gsap.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(button, { 
        opacity: 1, 
        y: 0, 
        visibility: 'visible',
        duration: 0.4, 
        ease: "back.out(1.7)",
        delay: 0.1 
      });
    } else {
      gsap.to(image, { scale: 1, duration: 0.4, ease: "power2.out" });
      gsap.to(overlay, { opacity: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(button, { 
        opacity: 0, 
        y: 20, 
        visibility: 'hidden',
        duration: 0.3, 
        ease: "power2.out" 
      });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-amber-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold font-display text-neutral-900 mb-2">
            Meilleurs vendeurs
          </h1>
          <p className="text-lg text-gray-600">
            Découvrez nos produits les plus populaires et les mieux notés
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filtres
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rechercher
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Nom du produit..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  aria-label="Sélectionner une catégorie"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Skin Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de peau
                </label>
                <select
                  value={selectedSkinType}
                  onChange={(e) => setSelectedSkinType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  aria-label="Sélectionner un type de peau"
                >
                  {skinTypes.map(skinType => (
                    <option key={skinType.value} value={skinType.value}>
                      {skinType.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="text-sm text-gray-600">
                {filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''} trouvé{filteredProducts.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  {filteredProducts.length} produits
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600">Trier par:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    aria-label="Trier les produits"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View Mode */}
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    aria-label="Vue en grille"
                    title="Vue en grille"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    aria-label="Vue en liste"
                    title="Vue en liste"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  ref={(el) => {
                    if (el) productsRef.current[index] = el;
                  }}
                  className={`bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-lg relative ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                  onMouseEnter={() => handleProductHover(index, true)}
                  onMouseLeave={() => handleProductHover(index, false)}
                >
                  {/* Product Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.badge}
                    </div>
                  )}

                  {/* Product Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-48 h-48' : 'aspect-square'
                  }`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image w-full h-full object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="product-overlay absolute inset-0 bg-black/40 opacity-0"></div>
                    
                    {/* Add to Cart Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className="add-to-cart-btn opacity-0 invisible"
                        style={{ transform: 'translateY(20px)' }}
                      >
                        <AddToCartButton 
                          product={product}
                          variant="primary"
                          size="sm"
                          className="shadow-lg"
                          fullWidth={false}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="font-bold text-lg text-neutral-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-1">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({product.reviewCount})
                      </span>
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      {product.isOnSale && product.originalPrice ? (
                        <>
                          <span className="text-2xl font-bold text-primary-600">
                            ${product.price.toFixed(2)} CAD
                          </span>
                          <span className="text-lg text-gray-500 line-through">
                            ${product.originalPrice.toFixed(2)} CAD
                          </span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-primary-600">
                          ${product.price.toFixed(2)} CAD
                        </span>
                      )}
                    </div>

                    {viewMode === 'list' && (
                      <AddToCartButton 
                        product={product}
                        variant="outline"
                        size="sm"
                        fullWidth={false}
                      />
                    )}
                  </div>

                  {product.id === '13' ? (
                    <Link to="/product/exfoliating-gloves" className="absolute inset-0 z-20" />
                  ) : null}
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Aucun produit trouvé
                </h3>
                <p className="text-gray-600 mb-4">
                  Essayez de modifier vos filtres ou votre recherche
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSkinType('all');
                    setSearchTerm('');
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 