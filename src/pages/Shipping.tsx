import React from 'react';

const Shipping = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-stone-50 via-white to-stone-100 animate-fade-in">
    <h1 className="text-4xl font-serif font-light mb-4 animate-fade-in-down">Shipping</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-200 rounded mb-8 animate-grow-in"></div>
    <div className="max-w-2xl text-stone-700 font-light text-lg space-y-6 text-center">
      <p className="animate-fade-in-up delay-100">
        Atelier offers worldwide shipping. Orders are processed within 2 business days and shipped via trusted carriers.
      </p>
      <ul className="list-disc list-inside text-left mx-auto animate-fade-in-up delay-200">
        <li>Free shipping on orders over $200.</li>
        <li>Tracking information will be provided once your order ships.</li>
        <li>International customers are responsible for any customs fees.</li>
      </ul>
    </div>
  </section>
);

export default Shipping; 