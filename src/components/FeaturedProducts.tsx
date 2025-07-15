import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { ToastContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { products as allProducts } from '../data/products';

const featuredProducts = allProducts.slice(0, 4);

const fetchPexelsImage = async (query: string) => {
  const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`,
    { headers: { Authorization: apiKey } }
  );
  const data = await res.json();
  return data.photos[0]?.src?.medium || '';
};

const FeaturedProducts = () => {
  const { showToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState(featuredProducts.map(p => ({ ...p, image: '' })));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchImages() {
      setLoading(true);
      const prods = await Promise.all(
        featuredProducts.map(async (p) => {
          const img = await fetchPexelsImage(p.name + ' ' + (p.category || 'clothing'));
          return { ...p, image: img };
        })
      );
      if (isMounted) {
        setProducts(prods);
        setLoading(false);
      }
    }
    fetchImages();
    return () => { isMounted = false; };
  }, []);

  return (
    <section className="py-24 bg-stone-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="text-xs text-stone-500 font-medium tracking-widest uppercase mb-4">
              FEATURED
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-stone-900 mb-6">
              Carefully Curated
            </h2>
            <div className="w-16 h-px bg-stone-300 mx-auto"></div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center text-stone-500 text-lg py-24">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {products.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product}
                className={`transform transition-all duration-700 ${
                  index % 2 === 0 ? 'md:translate-y-8' : ''
                }`}
                showToast={showToast}
              />
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-16">
          <button
            className="border border-stone-900 text-stone-900 px-12 py-4 text-sm font-medium tracking-wide hover:bg-stone-900 hover:text-white transition-all duration-300 transform active:scale-95 hover:translate-y-[-2px]"
            onClick={() => navigate('/products')}
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;