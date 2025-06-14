import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import type { Product } from '../../data/products';

interface AddToCartButtonProps {
  product: Product;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
  fullWidth?: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  variant = 'primary',
  size = 'md',
  className = '',
  showIcon = true,
  fullWidth = false,
}) => {
  const { addItem, openCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Add item to cart
    addItem(product);
    
    // Show success state
    setTimeout(() => {
      setIsAdding(false);
      setJustAdded(true);
      
      // Reset success state after 2 seconds
      setTimeout(() => {
        setJustAdded(false);
      }, 2000);
    }, 300);
  };



  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-sm',
    lg: 'px-6 py-4 text-base',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 border-primary-600',
    secondary: 'bg-neutral-900 text-white hover:bg-neutral-800 border-neutral-900',
    outline: 'bg-transparent text-primary-600 border-primary-600 hover:bg-primary-50',
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-medium rounded-lg border transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  if (justAdded) {
    return (
      <button
        className={`${baseClasses} bg-green-600 text-white border-green-600 hover:bg-green-700`}
        disabled
      >
        {showIcon && <Check className="w-4 h-4" />}
        Ajouté au panier
      </button>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={baseClasses}
    >
      {isAdding ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Ajout...
        </>
      ) : (
        <>
          {showIcon && <ShoppingBag className="w-4 h-4" />}
          Ajouter au panier
        </>
      )}
    </button>
  );
};

export default AddToCartButton; 