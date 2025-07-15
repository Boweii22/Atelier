import React from 'react';

const Sustainability = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-stone-50 via-white to-stone-100 animate-fade-in">
    <h1 className="text-4xl font-serif font-light mb-4 animate-fade-in-down">Sustainability</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-green-300 via-stone-400 to-green-100 rounded mb-8 animate-grow-in"></div>
    <div className="max-w-2xl text-stone-700 font-light text-lg space-y-6 text-center">
      <p className="animate-fade-in-up delay-100">
        At Atelier, sustainability is at the heart of everything we do. We are committed to using eco-friendly materials, ethical production methods, and supporting artisan communities.
      </p>
      <p className="animate-fade-in-up delay-200">
        Our collections feature organic cotton, linen, and responsibly sourced wool. We minimize waste through thoughtful design and small-batch production, ensuring each piece is made to last.
      </p>
      <p className="animate-fade-in-up delay-300">
        By choosing Atelier, you join us in our mission to protect the planet and celebrate mindful craftsmanship.
      </p>
    </div>
  </section>
);

export default Sustainability; 