import React, { useContext } from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { ToastContext } from '../App';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { showToast } = useContext(ToastContext);
  const handleLink = (msg: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    showToast(msg);
  };
  return (
    <footer className="bg-stone-50 py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-light tracking-wide text-stone-900">
              Atelier
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Handcrafted clothing that tells a story of artisanal mastery and sustainable practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" onClick={handleLink('Instagram coming soon!')} className="p-2 hover:bg-stone-200 rounded-full transition-colors duration-300">
                <Instagram className="h-4 w-4 text-stone-700" />
              </a>
              <a href="#" onClick={handleLink('Facebook coming soon!')} className="p-2 hover:bg-stone-200 rounded-full transition-colors duration-300">
                <Facebook className="h-4 w-4 text-stone-700" />
              </a>
              <a href="#" onClick={handleLink('Twitter coming soon!')} className="p-2 hover:bg-stone-200 rounded-full transition-colors duration-300">
                <Twitter className="h-4 w-4 text-stone-700" />
              </a>
              <a href="#" onClick={handleLink('Email coming soon!')} className="p-2 hover:bg-stone-200 rounded-full transition-colors duration-300">
                <Mail className="h-4 w-4 text-stone-700" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide text-stone-900 uppercase">
              Shop
            </h4>
            <ul className="space-y-2 text-stone-600 font-light">
              <li><Link to="/new-arrivals" className="hover:text-stone-900 transition-colors duration-300">New Arrivals</Link></li>
              <li><Link to="/knitwear" className="hover:text-stone-900 transition-colors duration-300">Knitwear</Link></li>
              <li><Link to="/dresses" className="hover:text-stone-900 transition-colors duration-300">Dresses</Link></li>
              <li><Link to="/outerwear" className="hover:text-stone-900 transition-colors duration-300">Outerwear</Link></li>
              <li><Link to="/accessories" className="hover:text-stone-900 transition-colors duration-300">Accessories</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide text-stone-900 uppercase">
              About
            </h4>
            <ul className="space-y-2 text-stone-600 font-light">
              <li><Link to="/our-story" className="hover:text-stone-900 transition-colors duration-300">Our Story</Link></li>
              <li><Link to="/artisans" className="hover:text-stone-900 transition-colors duration-300">Artisans</Link></li>
              <li><Link to="/sustainability" className="hover:text-stone-900 transition-colors duration-300">Sustainability</Link></li>
              <li><Link to="/journal" className="hover:text-stone-900 transition-colors duration-300">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-stone-900 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide text-stone-900 uppercase">
              Support
            </h4>
            <ul className="space-y-2 text-stone-600 font-light">
              <li><Link to="/size-guide" className="hover:text-stone-900 transition-colors duration-300">Size Guide</Link></li>
              <li><Link to="/care" className="hover:text-stone-900 transition-colors duration-300">Care Instructions</Link></li>
              <li><Link to="/returns" className="hover:text-stone-900 transition-colors duration-300">Returns</Link></li>
              <li><Link to="/shipping" className="hover:text-stone-900 transition-colors duration-300">Shipping</Link></li>
              <li><Link to="/faq" className="hover:text-stone-900 transition-colors duration-300">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-600 font-light text-sm">
            © 2025 Atelier. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-stone-600 font-light">
            <Link to="/privacy" className="hover:text-stone-900 transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-stone-900 transition-colors duration-300">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-stone-900 transition-colors duration-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;