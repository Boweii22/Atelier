import React, { useContext } from 'react';
import { ToastContext } from '../App';
import { useNavigate } from 'react-router-dom';

const EditorialSection = () => {
  const { showToast } = useContext(ToastContext);
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-xs text-stone-500 font-medium tracking-widest uppercase">
                THE CRAFT
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-stone-900 leading-tight">
                Artisanal Excellence
                <br />
                <span className="italic">in Every Stitch</span>
              </h2>
            </div>
            
            <div className="w-16 h-px bg-stone-300"></div>
            
            <div className="space-y-6 text-stone-700 font-light leading-relaxed">
              <p className="text-lg">
                Each piece in our collection represents hours of meticulous handwork by skilled artisans who have honed their craft over generations.
              </p>
              <p>
                From the initial design sketch to the final stitch, every garment is created with intention, care, and respect for both the wearer and the environment.
              </p>
              <p>
                We believe that true luxury lies not in mass production, but in the patient art of creating something beautiful, sustainable, and lasting.
              </p>
            </div>

            <div className="pt-4">
              <button
                className="border border-stone-900 text-stone-900 px-8 py-4 text-sm font-medium tracking-wide hover:bg-stone-900 hover:text-white transition-all duration-300 transform active:scale-95 hover:translate-y-[-2px]"
                onClick={() => navigate('/about')}
              >
                DISCOVER OUR PROCESS
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000" 
                alt="Artisan at work" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Accent elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-stone-200 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-stone-100 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;