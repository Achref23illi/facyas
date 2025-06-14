import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { gsap } from 'gsap';

const CartSidebar: React.FC = () => {
  const { state, removeItem, updateQuantity, closeCart, clearCart } = useCart();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Animate in
      gsap.set([overlayRef.current, sidebarRef.current], { 
        visibility: 'visible' 
      });
      
      gsap.fromTo(overlayRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      
      gsap.fromTo(sidebarRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.4, ease: 'power3.out' }
      );
    } else {
      // Animate out
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(sidebarRef.current, {
        x: '100%',
        duration: 0.4,
        ease: 'power3.out',
        onComplete: () => {
          gsap.set([overlayRef.current, sidebarRef.current], { 
            visibility: 'hidden' 
          });
          document.body.style.overflow = 'unset';
        }
      });
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [state.isOpen]);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)} CAD`;
  };

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-50 invisible"
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl invisible flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-primary-600" />
            <h2 className="text-xl font-semibold text-neutral-900">
              Panier ({state.itemCount})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="Fermer le panier"
          >
            <X className="w-5 h-5 text-neutral-600" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <ShoppingBag className="w-16 h-16 text-neutral-300 mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                Votre panier est vide
              </h3>
              <p className="text-neutral-600 mb-6">
                Découvrez nos produits de soins premium
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Continuer les achats
              </button>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {state.items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-neutral-900 text-sm leading-tight mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-neutral-600 mb-2">
                      {item.product.category}
                    </p>
                    
                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      {item.product.isOnSale && item.product.originalPrice ? (
                        <>
                          <span className="text-sm font-semibold text-primary-600">
                            {formatPrice(item.product.price)}
                          </span>
                          <span className="text-xs text-neutral-500 line-through">
                            {formatPrice(item.product.originalPrice)}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm font-semibold text-neutral-900">
                          {formatPrice(item.product.price)}
                        </span>
                      )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-md hover:bg-neutral-50 transition-colors"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus className="w-3 h-3 text-neutral-600" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-md hover:bg-neutral-50 transition-colors"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus className="w-3 h-3 text-neutral-600" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1 text-neutral-400 hover:text-red-500 transition-colors"
                        aria-label="Supprimer du panier"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear Cart Button */}
              {state.items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-neutral-500 hover:text-red-500 transition-colors py-2"
                >
                  Vider le panier
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer - Checkout */}
        {state.items.length > 0 && (
          <div className="border-t border-neutral-200 p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between text-lg font-semibold">
              <span className="text-neutral-900">Sous-total:</span>
              <span className="text-primary-600">{formatPrice(state.total)}</span>
            </div>

            {/* Shipping Note */}
            <p className="text-xs text-neutral-600 text-center">
              Livraison gratuite pour les commandes de plus de $50 CAD
            </p>

            {/* Checkout Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Procéder au paiement
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-neutral-300 text-neutral-700 py-3 rounded-lg font-medium hover:bg-neutral-50 transition-colors"
              >
                Continuer les achats
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar; 