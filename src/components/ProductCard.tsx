import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    isNew?: boolean;
  };
  className?: string;
  showToast?: (msg: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '', showToast }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [quickShopOpen, setQuickShopOpen] = useState(false);
  const { add } = useCart();

  const handleAddToCart = () => {
    add({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
    });
    if (showToast) showToast('Added to cart!');
  };

  return (
    <>
      <div 
        className={`group relative overflow-hidden ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ease-out transform ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Overlay */}
          <div className={`absolute inset-0 bg-black/0 transition-all duration-500 ${
            isHovered ? 'bg-black/10' : ''
          }`}></div>

          {/* New Badge */}
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-white text-stone-900 px-3 py-1 text-xs font-medium tracking-wide">
              NEW
            </div>
          )}

          {/* Action Buttons */}
          <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300 active:scale-90"
            >
              <Heart className={`h-4 w-4 transition-colors duration-300 ${
                isLiked ? 'text-red-500 fill-red-500' : 'text-stone-700'
              }`} />
            </button>
            <button
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300 active:scale-90"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-4 w-4 text-stone-700" />
            </button>
          </div>

          {/* Quick Shop Button */}
          <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button
              className="w-full bg-white/95 backdrop-blur-sm text-stone-900 py-3 text-sm font-medium tracking-wide hover:bg-white transition-all duration-300 active:scale-95"
              onClick={() => setQuickShopOpen(true)}
            >
              QUICK SHOP
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-6 space-y-2">
          <div className="text-xs text-stone-500 font-medium tracking-widest uppercase">
            {product.category}
          </div>
          <h3 className="text-lg font-serif font-light text-stone-900 leading-snug">
            {product.name}
          </h3>
          <div className="text-stone-700 font-light">
            ${product.price}
          </div>
        </div>
      </div>
      {/* Quick Shop Modal */}
      {quickShopOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 animate-fade-in" onClick={() => setQuickShopOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-4 animate-slide-up relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 text-xl" onClick={() => setQuickShopOpen(false)}>&times;</button>
            <img src={product.image} alt={product.name} className="w-40 h-52 object-cover rounded-lg mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-light mb-2 text-stone-900 text-center">{product.name}</h2>
            <div className="text-lg text-stone-700 font-light text-center mb-2">${product.price}</div>
            <div className="text-stone-600 text-sm text-center mb-4">{product.description}</div>
            <button className="w-full py-3 bg-stone-900 text-white rounded font-medium hover:bg-stone-800 transition" onClick={() => { handleAddToCart(); setQuickShopOpen(false); }}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;