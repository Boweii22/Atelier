import React, { useRef, useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import EditorialSection from './components/EditorialSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import About from './pages/About';
import Journal from './pages/Journal';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Craft from './pages/Craft';
import AllProducts from './pages/AllProducts';
import NewArrivals from './pages/NewArrivals';
import Knitwear from './pages/Knitwear';
import Dresses from './pages/Dresses';
import Outerwear from './pages/Outerwear';
import Accessories from './pages/Accessories';
import OurStory from './pages/OurStory';
import Artisans from './pages/Artisans';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import SizeGuide from './pages/SizeGuide';
import Care from './pages/Care';
import Returns from './pages/Returns';
import Shipping from './pages/Shipping';
import FAQ from './pages/FAQ';
import { CartProvider, useCart } from './contexts/CartContext';
import Checkout from './pages/Checkout';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';

// Toast context for global access
export const ToastContext = createContext({ showToast: (msg: string) => {} });

function HomePage({ refs }: { refs: any }) {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.section) {
      const section = location.state.section;
      if (section === 'featured' && refs.featured.current) refs.featured.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (section === 'editorial' && refs.editorial.current) refs.editorial.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (section === 'newsletter' && refs.newsletter.current) refs.newsletter.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // eslint-disable-next-line
  }, [location.state]);
  return (
    <>
      <div ref={refs.hero}><Hero refs={{ featured: refs.featured, editorial: refs.editorial }} /></div>
      <div ref={refs.featured}><FeaturedProducts /></div>
      <div ref={refs.editorial}><EditorialSection /></div>
      <div ref={refs.newsletter}><Newsletter /></div>
    </>
  );
}

function CartSidebar({ onClose }: { onClose: () => void }) {
  const { items, remove } = useCart();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <div className="bg-white w-full max-w-md h-full md:rounded-l-2xl shadow-2xl p-8 flex flex-col animate-slide-up md:animate-none md:animate-slide-in-right relative" style={{maxWidth:'400px'}} onClick={e => e.stopPropagation()}>
      <button className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 text-xl" onClick={onClose}>&times;</button>
      <h2 className="text-2xl font-serif font-light mb-4 text-stone-900">Your Cart</h2>
      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-lg text-stone-700 font-light mb-6">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-stone-100 mb-6 overflow-y-auto flex-1">
            {items.map(item => (
              <li key={item.id} className="flex items-center py-4 gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded-lg border border-stone-100" />
                <div className="flex-1">
                  <div className="text-base font-serif font-light text-stone-900">{item.name}</div>
                  <div className="text-stone-500 text-xs">Qty: {item.qty}</div>
                </div>
                <div className="text-base font-medium text-stone-900">${item.price * item.qty}</div>
                <button className="ml-2 text-red-500 hover:underline text-xs" onClick={() => remove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-serif font-light text-stone-900">Subtotal</span>
            <span className="text-lg font-medium text-stone-900">${subtotal}</span>
          </div>
          <a href="/cart" className="w-full py-3 bg-stone-900 text-white rounded font-medium text-center hover:bg-stone-800 transition">Go to Cart Page</a>
        </>
      )}
    </div>
  );
}

function App() {
  // Section refs for smooth scrolling
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const editorialRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);

  // Toast state
  const [toast, setToast] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <CartProvider>
      <ToastContext.Provider value={{ showToast }}>
        <Router>
          <div className="min-h-screen bg-white relative">
            <Header
              refs={{
                hero: heroRef,
                featured: featuredRef,
                editorial: editorialRef,
                newsletter: newsletterRef,
              }}
              setSearchOpen={setSearchOpen}
              setCartOpen={setCartOpen}
            />
            <main>
              <Routes>
                <Route path="/" element={<HomePage refs={{ hero: heroRef, featured: featuredRef, editorial: editorialRef, newsletter: newsletterRef }} />} />
                <Route path="/about" element={<About />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/craft" element={<Craft />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/new-arrivals" element={<NewArrivals />} />
                <Route path="/knitwear" element={<Knitwear />} />
                <Route path="/dresses" element={<Dresses />} />
                <Route path="/outerwear" element={<Outerwear />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/artisans" element={<Artisans />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/size-guide" element={<SizeGuide />} />
                <Route path="/care" element={<Care />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
              </Routes>
            </main>
            <Footer />
            {/* Toast */}
            {toast && (
              <div className="fixed left-1/2 bottom-8 z-[9999] -translate-x-1/2 bg-stone-900 text-white px-6 py-3 rounded shadow-lg animate-fade-in">
                {toast}
              </div>
            )}
            {searchOpen && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 animate-fade-in" onClick={() => setSearchOpen(false)}>
                <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-4 animate-slide-up relative" onClick={e => e.stopPropagation()}>
                  <button className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 text-xl" onClick={() => setSearchOpen(false)}>&times;</button>
                  <h2 className="text-2xl font-serif font-light mb-4 text-stone-900">Search</h2>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-stone-200 rounded focus:outline-none focus:border-stone-900 text-stone-900 text-lg mb-2"
                    placeholder="Search products, stories, ..."
                    autoFocus
                  />
                  <button className="w-full mt-4 py-3 bg-stone-900 text-white rounded font-medium hover:bg-stone-800 transition">Search</button>
                </div>
              </div>
            )}
            {cartOpen && (
              <div className="fixed inset-0 z-[9999] flex items-end justify-end bg-black/40 animate-fade-in" onClick={() => setCartOpen(false)}>
                <CartSidebar onClose={() => setCartOpen(false)} />
              </div>
            )}
          </div>
        </Router>
      </ToastContext.Provider>
    </CartProvider>
  );
}

export default App;