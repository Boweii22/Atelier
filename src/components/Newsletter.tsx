import React, { useState, useContext } from 'react';
import { ToastContext } from '../App';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useContext(ToastContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      showToast("Thank you for subscribing! You'll hear from us soon.");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-24 bg-stone-900 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-xs text-stone-400 font-medium tracking-widest uppercase">
                NEWSLETTER
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white leading-tight">
                Stories of Craft
                <br />
                <span className="italic">& Creation</span>
              </h2>
            </div>
            
            <div className="w-16 h-px bg-stone-600 mx-auto"></div>
            
            <p className="text-lg text-stone-300 font-light leading-relaxed">
              Join our community to receive exclusive insights into our artisan process, 
              new collection previews, and stories from the makers behind each piece.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-transparent border border-stone-600 text-white placeholder-stone-400 focus:outline-none focus:border-stone-400 transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-stone-900 font-medium tracking-wide hover:bg-stone-100 transition-colors duration-300 transform active:scale-95 hover:translate-y-[-2px]"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;