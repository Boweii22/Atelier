import React from 'react';

const OurStory = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-stone-50 via-white to-stone-100 animate-fade-in">
    <h1 className="text-4xl font-serif font-light mb-4 animate-fade-in-down">Our Story</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-200 rounded mb-8 animate-grow-in"></div>
    <div className="max-w-2xl text-stone-700 font-light text-lg space-y-6 text-center">
      <p className="animate-fade-in-up delay-100">
        Atelier was founded with a vision for slow, meaningful fashion. Our journey began in 2015, inspired by a desire to honor traditional craftsmanship while embracing modern design. Each collection is a testament to our commitment to sustainability, artistry, and timeless style.
      </p>
      <p className="animate-fade-in-up delay-200">
        From our first handwoven knitwear pieces to our latest eco-friendly collections, we have always believed that true luxury lies in the details—the careful selection of materials, the skill of our artisans, and the stories woven into every garment.
      </p>
      <p className="animate-fade-in-up delay-300">
        Today, Atelier continues to grow, partnering with skilled makers and supporting ethical practices. We invite you to be part of our story and celebrate the beauty of mindful creation.
      </p>
    </div>
  </section>
);

export default OurStory; 