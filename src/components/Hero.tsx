import React, { useContext } from 'react';
import { ToastContext } from '../App';

const Hero = ({ refs }: { refs: any }) => {
  const { showToast } = useContext(ToastContext);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      showToast('Section coming soon!');
    }
  };

  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2" 
          alt="Handcrafted clothing hero" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[8000ms] ease-out"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 lg:col-span-6">
              <div className="space-y-8 animate-fade-in">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.15] text-white mb-6 md:mb-10 drop-shadow-lg animate-fade-in">
                  Handcrafted
                  <br />
                  <span className="italic font-light block mt-4">with Purpose</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed md:leading-normal lg:leading-relaxed max-w-2xl drop-shadow-md animate-fade-in-up delay-100">
                  Each piece tells a story of artisanal mastery, sustainable practices, and timeless elegance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    className="bg-white text-stone-900 px-8 py-4 text-sm font-medium tracking-wide hover:bg-stone-100 transition-all duration-300 transform active:scale-95 hover:translate-y-[-2px] hover:shadow-lg"
                    onClick={() => scrollTo(refs.featured)}
                  >
                    EXPLORE COLLECTION
                  </button>
                  <button
                    className="border border-white text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-white hover:text-stone-900 transition-all duration-300 transform active:scale-95 hover:translate-y-[-2px]"
                    onClick={() => scrollTo(refs.editorial)}
                  >
                    DISCOVER OUR CRAFT
                  </button>
                </div>
              </div>
            </div>

            {/* Right side accent */}
            <div className="hidden lg:block lg:col-span-6">
              <div className="h-full flex items-end justify-end pr-20">
                <div className="text-white/60 text-sm font-light tracking-widest transform rotate-90 origin-bottom-left">
                  SPRING 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-white/40 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;