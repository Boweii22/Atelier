import React from 'react';

const Care = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-stone-50 via-white to-stone-100 animate-fade-in">
    <h1 className="text-4xl font-serif font-light mb-4 animate-fade-in-down">Care Instructions</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-200 rounded mb-8 animate-grow-in"></div>
    <div className="max-w-2xl text-stone-700 font-light text-lg space-y-6 text-center">
      <p className="animate-fade-in-up delay-100">
        To keep your Atelier garments looking their best, follow these care tips:
      </p>
      <ul className="list-disc list-inside text-left mx-auto animate-fade-in-up delay-200">
        <li>Hand wash or use a gentle machine cycle with cold water.</li>
        <li>Use mild, eco-friendly detergents.</li>
        <li>Lay flat to dry; avoid wringing or twisting.</li>
        <li>Iron on low heat if needed, or steam for best results.</li>
        <li>Store knits folded to prevent stretching.</li>
      </ul>
    </div>
  </section>
);

export default Care; 