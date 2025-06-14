import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Star, Heart, Share2, Truck, Shield, RotateCcw, Award } from 'lucide-react';
import { ASSETS } from '../config/assets';
import AddToCartButton from '../components/ui/AddToCartButton';
import { allProducts } from '../data/products';

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const product = allProducts.find(p => p.id === '13');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const pageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  if (!product) return null;

  const images = [
    { src: ASSETS.products.exfoliating_gloves, alt: product.name },
    { src: ASSETS.products.black_glove, alt: 'Black Glove' },
    { src: ASSETS.products.rose_glove, alt: 'Rose Glove' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page entrance animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      );
      
      gsap.fromTo(infoRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power2.out" }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating) 
            ? 'text-amber-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    }
  };

  return (
    <div ref={pageRef} className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-neutral-50 border-b">
        <div className="container-custom py-4">
          <nav className="flex items-center space-x-2 text-sm text-neutral-600">
            <button 
              onClick={() => navigate(-1)} 
              className="hover:text-primary-600 transition-colors"
            >
              Accueil
            </button>
            <span>/</span>
            <button 
              onClick={() => navigate('/products')} 
              className="hover:text-primary-600 transition-colors"
            >
              Produits
            </button>
            <span>/</span>
            <span className="text-neutral-900 font-medium">Outils</span>
            <span>/</span>
            <span className="text-neutral-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container-custom py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div ref={imageRef} className="space-y-6">
            {/* Main Image */}
            <div className="relative aspect-square bg-neutral-50 rounded-3xl overflow-hidden group">
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Image Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    aria-label="Image précédente"
                  >
                    <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    aria-label="Image suivante"
                  >
                    <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index 
                      ? 'border-primary-600 ring-2 ring-primary-200' 
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div ref={infoRef} className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 rounded-full transition-colors ${
                      isWishlisted 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-neutral-600">
                  {product.rating} ({product.reviewCount} avis)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-neutral-50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-primary-600">
                    ${product.price.toFixed(2)} CAD
                  </span>
                  {product.originalPrice && (
                    <span className="ml-3 text-lg text-neutral-500 line-through">
                      ${product.originalPrice.toFixed(2)} CAD
                    </span>
                  )}
                </div>
                {product.isOnSale && (
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    Promo
                  </span>
                )}
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-neutral-700">Quantité:</span>
                <div className="flex items-center border border-neutral-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-neutral-100 transition-colors"
                    aria-label="Diminuer la quantité"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-neutral-100 transition-colors"
                    aria-label="Augmenter la quantité"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              <AddToCartButton 
                product={product} 
                variant="primary" 
                size="lg" 
                className="w-full mb-4"
              />
              
              <button className="w-full bg-neutral-900 text-white py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
                Acheter maintenant
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                <Truck className="w-6 h-6 text-primary-600" />
                <div>
                  <p className="font-medium text-primary-900">Livraison gratuite</p>
                  <p className="text-sm text-primary-700">Commandes +$50 CAD</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                <Shield className="w-6 h-6 text-neutral-600" />
                <div>
                  <p className="font-medium text-neutral-900">Garantie qualité</p>
                  <p className="text-sm text-neutral-700">Satisfaction garantie</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                <RotateCcw className="w-6 h-6 text-neutral-600" />
                <div>
                  <p className="font-medium text-neutral-900">Retours faciles</p>
                  <p className="text-sm text-neutral-700">30 jours</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                <Award className="w-6 h-6 text-primary-600" />
                <div>
                  <p className="font-medium text-primary-900">Produit premium</p>
                  <p className="text-sm text-primary-700">Qualité supérieure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-neutral-200">
            <nav className="flex space-x-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'benefits', label: 'Avantages' },
                { id: 'usage', label: 'Utilisation' },
                { id: 'reviews', label: 'Avis clients' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed">
                  Les gants exfoliants Facyas offrent un gommage doux et efficace pour éliminer les cellules mortes, 
                  stimuler la circulation et révéler une peau plus lisse et éclatante. Fabriqués avec des matériaux 
                  de haute qualité, ces gants sont parfaits pour un rituel spa à domicile.
                </p>
                <p className="text-neutral-700 leading-relaxed mt-4">
                  Utilisez-les sous la douche avec votre nettoyant préféré pour une expérience de gommage luxueuse 
                  qui laisse votre peau douce, lisse et rayonnante. Convient à tous les types de peau.
                </p>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Exfoliation douce',
                    description: 'Élimine délicatement les cellules mortes de la peau pour révéler un teint éclatant'
                  },
                  {
                    title: 'Stimule la circulation',
                    description: 'Améliore la micro-circulation pour une peau plus ferme et tonifiée'
                  },
                  {
                    title: 'Prévient les poils incarnés',
                    description: 'Aide à prévenir la formation de poils incarnés grâce à l\'exfoliation régulière'
                  },
                  {
                    title: 'Réutilisable et durable',
                    description: 'Matériaux de qualité supérieure, faciles à nettoyer et à entretenir'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">{benefit.title}</h3>
                      <p className="text-neutral-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-6">
                <div className="bg-primary-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-primary-900 mb-4">Mode d'emploi</h3>
                  <ol className="space-y-3 text-primary-800">
                    <li className="flex gap-3">
                      <span className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                      <span>Mouillez les gants avec de l'eau tiède</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                      <span>Appliquez une petite quantité de nettoyant ou de savon</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                      <span>Massez la peau en mouvements circulaires doux</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                      <span>Rincez abondamment à l'eau claire</span>
                    </li>
                  </ol>
                </div>
                <div className="bg-amber-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-amber-900 mb-2">Fréquence d'utilisation</h3>
                  <p className="text-amber-800">Utilisez 2-3 fois par semaine pour des résultats optimaux. Évitez une utilisation excessive qui pourrait irriter la peau.</p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="bg-neutral-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900">{product.rating}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        {renderStars(product.rating)}
                      </div>
                      <p className="text-sm text-neutral-600 mt-1">Basé sur {product.reviewCount} avis</p>
                    </div>
                    <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                      Écrire un avis
                    </button>
                  </div>
                </div>
                
                {/* Sample Reviews */}
                <div className="space-y-4">
                  {[
                    {
                      name: 'Marie L.',
                      rating: 5,
                      date: '15 mars 2024',
                      comment: 'Excellents gants exfoliants ! Ma peau n\'a jamais été aussi douce. Je recommande vivement.'
                    },
                    {
                      name: 'Sophie D.',
                      rating: 4,
                      date: '8 mars 2024',
                      comment: 'Très bonne qualité, faciles à utiliser. L\'effet est visible dès la première utilisation.'
                    },
                    {
                      name: 'Julie M.',
                      rating: 5,
                      date: '2 mars 2024',
                      comment: 'Parfait pour mon rituel beauté. Les gants sont durables et très efficaces.'
                    }
                  ].map((review, index) => (
                    <div key={index} className="border border-neutral-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            <span className="text-primary-600 font-medium">{review.name.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium text-neutral-900">{review.name}</p>
                            <p className="text-sm text-neutral-500">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-neutral-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 