import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ASSETS } from '../../config/assets';
import { allProducts } from '../../data/products';
import { searchProducts, getSearchSuggestions } from '../../utils/searchUtils';
import { useCart } from '../../contexts/CartContext';
import { Star } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { state: cartState, toggleCart } = useCart();

  // Search results based on current query
  const searchResults = useMemo(() => {
    return searchProducts(allProducts, searchQuery);
  }, [searchQuery]);

  // Search suggestions
  const suggestions = useMemo(() => {
    return getSearchSuggestions(allProducts, searchQuery);
  }, [searchQuery]);

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to products page with search query
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleProductClick = (productId: string) => {
    // For now, navigate to products page - in a real app, this would go to product detail
    navigate(`/products?highlight=${productId}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    handleSearchSubmit({ preventDefault: () => {} } as React.FormEvent);
  };

  const popularSearches = [
    'Crème hydratante',
    'Sérum vitamine C',
    'Nettoyant visage',
    'Anti-âge',
    'Acné',
    'Protection solaire'
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-neutral-300'
        }`}
      />
    ));
  };

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="bg-amber-700 text-white text-center py-2 px-4">
        <p className="text-sm font-medium">
          PAYEZ EN 4 VERSEMENTS SANS INTÉRÊT.
        </p>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
          <div className="bg-white w-full max-w-2xl mx-4 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
            {/* Search Header */}
            <div className="p-6 border-b border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-neutral-900">Rechercher</h3>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-neutral-500 hover:text-neutral-700 transition-colors"
                  aria-label="Fermer la recherche"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Search Form */}
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher des produits, conseils, ingrédients..."
                  className="w-full px-4 py-3 pr-12 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-900 placeholder-neutral-500"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-primary-600 transition-colors"
                  aria-label="Rechercher"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Search Content */}
            <div className="p-6 max-h-96 overflow-y-auto">
              {searchQuery.trim() ? (
                // Search Results
                <div>
                  <h4 className="text-sm font-medium text-neutral-700 mb-3">
                    {searchResults.length > 0 
                      ? `${searchResults.length} résultat${searchResults.length > 1 ? 's' : ''} pour "${searchQuery}"`
                      : `Aucun résultat pour "${searchQuery}"`
                    }
                  </h4>
                  
                  {searchResults.length > 0 ? (
                    <div className="space-y-3">
                      {searchResults.slice(0, 6).map((product) => (
                        <div
                          key={product.id}
                          onClick={() => handleProductClick(product.id)}
                          className="flex items-center gap-4 p-3 hover:bg-neutral-50 rounded-lg cursor-pointer transition-colors group"
                        >
                          <div className="w-16 h-16 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-semibold text-neutral-900 truncate group-hover:text-primary-600 transition-colors">
                              {product.name}
                            </h5>
                            <p className="text-sm text-neutral-600 truncate">
                              {product.description}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1">
                                {renderStars(product.rating)}
                              </div>
                              <span className="text-xs text-neutral-500">
                                ({product.reviewCount})
                              </span>
                                                      <span className="text-sm font-semibold text-primary-600">
                          ${product.price.toFixed(2)} CAD
                        </span>
                            </div>
                          </div>
                          {product.badge && (
                            <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-medium">
                              {product.badge}
                            </span>
                          )}
                        </div>
                      ))}
                      
                      {searchResults.length > 6 && (
                        <button
                          onClick={() => handleSearchSubmit({ preventDefault: () => {} } as React.FormEvent)}
                          className="w-full text-center py-3 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                        >
                          Voir tous les {searchResults.length} résultats
                        </button>
                      )}
                    </div>
                  ) : (
                    // No results - show suggestions
                    suggestions.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-neutral-700 mb-2">Suggestions :</h5>
                        <div className="flex flex-wrap gap-2">
                          {suggestions.map((suggestion) => (
                            <button
                              key={suggestion}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="px-3 py-1 bg-neutral-100 hover:bg-primary-50 hover:text-primary-700 text-neutral-700 rounded-full text-sm transition-colors"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              ) : (
                // Popular Searches
                <div>
                  <h4 className="text-sm font-medium text-neutral-700 mb-3">Recherches populaires</h4>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search) => (
                      <button
                        key={search}
                        onClick={() => handleSuggestionClick(search)}
                        className="px-3 py-2 bg-neutral-100 hover:bg-primary-50 hover:text-primary-700 text-neutral-700 rounded-full text-sm transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                  
                  {/* Quick Links */}
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-neutral-700 mb-3">Accès rapide</h4>
                    <div className="space-y-2">
                      <Link
                        to="/products"
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span className="text-neutral-900">Tous les produits</span>
                      </Link>
                      <Link
                        to="/blog"
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-neutral-900">Blog & Conseils</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <header className="bg-white shadow-sm border-b border-neutral-200 py-6">
        <div className="container-custom">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between h-20 relative">
            {/* Left Navigation */}
            <nav className="flex items-center space-x-12">
              <Link 
                to="/products" 
                className="text-neutral-600 hover:text-primary-600 transition-colors font-medium text-sm tracking-wide uppercase"
              >
                MAGASINEZ
              </Link>
              <Link 
                to="/about" 
                className="text-neutral-600 hover:text-primary-600 transition-colors font-medium text-sm tracking-wide uppercase"
              >
                À PROPOS
              </Link>
            </nav>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link to="/" className="flex items-center">
                <img
                  src={ASSETS.logo}
                  alt="Facyas Logo"
                  className="h-20 w-auto"
                />
              </Link>
            </div>

            {/* Right Section: Navigation + Icons */}
            <div className="flex items-center space-x-12">
              {/* Right Navigation */}
              <nav className="flex items-center space-x-12">
                {/* Links removed as per request */}
              </nav>

              {/* Action Icons */}
              <div className="flex items-center space-x-5">
                {/* User Account */}
                <button 
                  className="text-neutral-700 hover:text-primary-600 transition-colors"
                  aria-label="Account"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>

                {/* Search */}
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="text-neutral-700 hover:text-primary-600 transition-colors"
                  aria-label="Search"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                {/* Shopping Cart */}
                <button 
                  onClick={toggleCart}
                  className="text-neutral-700 hover:text-primary-600 transition-colors relative"
                  aria-label="Shopping cart"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 13" />
                  </svg>
                  {cartState.itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartState.itemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between h-16">
            {/* Logo on Left */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src={ASSETS.logo}
                  alt="Facyas Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Icons and Menu Button on Right */}
            <div className="flex items-center space-x-4">
              {/* User Account */}
              <button 
                className="text-neutral-700 hover:text-primary-600 transition-colors"
                aria-label="Account"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Search */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-neutral-700 hover:text-primary-600 transition-colors"
                aria-label="Search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Shopping Cart */}
              <button 
                onClick={toggleCart}
                className="text-neutral-700 hover:text-primary-600 transition-colors relative"
                aria-label="Shopping cart"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 13" />
                </svg>
                {cartState.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartState.itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="text-neutral-700 hover:text-primary-600 transition-colors ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-neutral-200 py-4 mt-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/products" 
                  className="text-neutral-700 hover:text-primary-600 transition-colors font-medium text-sm tracking-wide uppercase px-4 py-2 rounded-lg hover:bg-neutral-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  MAGASINEZ
                </Link>
                <Link 
                  to="/about" 
                  className="text-neutral-700 hover:text-primary-600 transition-colors font-medium text-sm tracking-wide uppercase px-4 py-2 rounded-lg hover:bg-neutral-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  À PROPOS
                </Link>
                {/* Links removed in mobile menu */}
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar; 