import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Star } from 'lucide-react';
import Button from '../common/Button';
import AddToCartButton from '../ui/AddToCartButton';
import { allProducts } from '../../data/products';

const ProductShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement[]>([]);

  // Get featured products (first 4 products)
  const products = allProducts.slice(0, 4);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation for the section
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Stagger animation for products
      gsap.fromTo(productsRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3
        }
      );

      // Set initial state for all buttons to be invisible
      productsRef.current.forEach(product => {
        if (product) {
          const button = product.querySelector('.add-to-cart-btn');
          const overlay = product.querySelector('.product-overlay');
          if (button) {
            gsap.set(button, { opacity: 0, y: 20, visibility: 'hidden' });
          }
          if (overlay) {
            gsap.set(overlay, { opacity: 0 });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleProductHover = (index: number, isEntering: boolean) => {
    const product = productsRef.current[index];
    if (!product) return;

    const image = product.querySelector('.product-image');
    const overlay = product.querySelector('.product-overlay');
    const button = product.querySelector('.add-to-cart-btn');
    const badge = product.querySelector('.product-badge');

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
      if (badge) {
        gsap.to(badge, { scale: 1.1, duration: 0.3, ease: "power2.out" });
      }
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
      if (badge) {
        gsap.to(badge, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
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
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-neutral-900 mb-4">
            MAGASINEZ NOS COUPS DE COEURS
          </h2>
          <div className="w-24 h-0.5 bg-primary-600 mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => {
                if (el) productsRef.current[index] = el;
              }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-xl"
              onMouseEnter={() => handleProductHover(index, true)}
              onMouseLeave={() => handleProductHover(index, false)}
            >
              {/* Product Badge */}
              {product.badge && (
                <div className="product-badge absolute top-4 left-4 z-10 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="product-overlay absolute inset-0 bg-black/40"></div>
                
                {/* Add to Cart Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <AddToCartButton
                    product={product}
                    variant="primary"
                    size="md"
                    className="add-to-cart-btn font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
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
                <div className="flex items-center gap-2">
                  {product.isOnSale && product.originalPrice ? (
                    <>
                      <span className="text-2xl font-bold text-primary-600">
                        ${product.price.toFixed(2)} CAD
                      </span>
                      <span className="text-lg text-neutral-500 line-through">
                        ${product.originalPrice.toFixed(2)} CAD
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-primary-600">
                      ${product.price.toFixed(2)} CAD
                    </span>
                  )}
                </div>
              </div>

              {product.id === '13' && (
                <Link to="/product/exfoliating-gloves" className="absolute inset-0 z-20" />
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/products">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-medium border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              VOIR TOUTES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 