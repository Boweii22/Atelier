import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { ToastContext } from '../App';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header = ({ refs, setSearchOpen, setCartOpen }: { refs: any, setSearchOpen: (open: boolean) => void, setCartOpen: (open: boolean) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { showToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    setIsMenuOpen(false);
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper to handle section navigation from any page
  const goToSection = (section: 'featured' | 'editorial' | 'newsletter') => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      // Already on homepage, scroll
      if (section === 'featured') scrollTo(refs.featured);
      if (section === 'editorial') scrollTo(refs.editorial);
      if (section === 'newsletter') scrollTo(refs.newsletter);
    } else {
      // Navigate to homepage and pass section as state
      navigate('/', { state: { section } });
    }
  };

  const goToCraft = () => {
    setIsMenuOpen(false);
    navigate('/craft');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => goToSection('featured')}>
            <h1 className="text-2xl font-serif font-light tracking-wide text-stone-800">
              Atelier
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <button onClick={() => goToSection('featured')} className="text-stone-700 hover:text-stone-900 transition-colors duration-300 text-sm font-medium tracking-wide bg-transparent">
              Collections
            </button>
            <button onClick={() => goToSection('editorial')} className="text-stone-700 hover:text-stone-900 transition-colors duration-300 text-sm font-medium tracking-wide bg-transparent">
              About
            </button>
            <button onClick={goToCraft} className="text-stone-700 hover:text-stone-900 transition-colors duration-300 text-sm font-medium tracking-wide bg-transparent">
              Craft
            </button>
            <button onClick={() => goToSection('newsletter')} className="text-stone-700 hover:text-stone-900 transition-colors duration-300 text-sm font-medium tracking-wide bg-transparent">
              Journal
            </button>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="p-2 hover:bg-stone-100 rounded-full transition-colors duration-300" onClick={() => setSearchOpen(true)}>
              <Search className="h-5 w-5 text-stone-700" />
            </button>
            <button className="p-2 hover:bg-stone-100 rounded-full transition-colors duration-300" onClick={() => showToast('User account coming soon!')}>
              <User className="h-5 w-5 text-stone-700" />
            </button>
            <button className="p-2 hover:bg-stone-100 rounded-full transition-colors duration-300 relative" onClick={() => setCartOpen(true)}>
              <ShoppingBag className="h-5 w-5 text-stone-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-stone-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-stone-100 rounded-full transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-stone-700" />
              ) : (
                <Menu className="h-5 w-5 text-stone-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-6 space-y-4">
            <button onClick={() => goToSection('featured')} className="block w-full text-left text-stone-700 hover:text-stone-900 transition-colors duration-300 text-sm font-medium tracking-wide bg-transparent py-2">
              Collections
            </button>
            <button onClick={() => goToSection('editorial')} className="block w-full text-left text-stone-700 hover:text-stone-900 transition-colors duration-300 text-sm font-medium tracking-wide bg-transparent py-2">
              About
            </button>
            <button onClick={goToCraft} className="block w-full text-left text-stone-700 hover:text-stone-900 transition-colors duration-300 text-sm font-medium tracking-wide bg-transparent py-2">
              Craft
            </button>
            <button onClick={() => goToSection('newsletter')} className="block w-full text-left text-stone-700 hover:text-stone-900 transition-colors duration-300 text-sm font-medium tracking-wide bg-transparent py-2">
              Journal
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;