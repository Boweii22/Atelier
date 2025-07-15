import React from 'react';

const steps = [
  {
    title: 'Inspired Design',
    desc: 'Every piece begins with a vision—sketched by our designers, inspired by nature, culture, and timeless style.',
    icon: '🎨',
  },
  {
    title: 'Artisan Selection',
    desc: 'We collaborate with skilled artisans who have honed their craft over generations, ensuring every detail is perfect.',
    icon: '🧵',
  },
  {
    title: 'Sustainable Materials',
    desc: 'We source only the finest, eco-friendly materials, prioritizing quality and environmental responsibility.',
    icon: '🌱',
  },
  {
    title: 'Handcrafted Perfection',
    desc: 'Each garment is meticulously handcrafted, with patience and care, resulting in a truly unique piece.',
    icon: '👐',
  },
];

const Craft = () => (
  <div className="min-h-screen bg-white flex flex-col">
    {/* Hero */}
    <section className="flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-br from-stone-50 to-stone-100 animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-serif font-light text-stone-900 mb-6 text-center">Our Craft</h1>
      <p className="text-lg md:text-xl text-stone-700 font-light max-w-2xl text-center mb-8">Discover the journey behind every Atelier piece—where inspiration, tradition, and sustainability meet modern design.</p>
      <div className="w-16 h-1 bg-stone-300 rounded mb-4"></div>
    </section>

    {/* Steps */}
    <section className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
      {steps.map((step, idx) => (
        <div key={step.title} className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-stone-100 animate-fade-in" style={{ animationDelay: `${0.1 * idx}s` }}>
          <div className="text-5xl mb-4">{step.icon}</div>
          <h2 className="text-2xl font-serif font-light text-stone-900 mb-2">{step.title}</h2>
          <p className="text-stone-600 font-light">{step.desc}</p>
        </div>
      ))}
    </section>

    {/* Call to Action */}
    <section className="flex flex-col items-center justify-center py-16 animate-fade-in">
      <h3 className="text-3xl font-serif font-light text-stone-900 mb-4">Experience the Difference</h3>
      <p className="text-lg text-stone-700 font-light max-w-xl text-center mb-8">Every Atelier piece is a testament to patience, skill, and a passion for excellence. Explore our collection and find your story.</p>
      <a href="/" className="px-10 py-4 border border-stone-900 text-stone-900 rounded-full font-medium tracking-wide hover:bg-stone-900 hover:text-white transition-all duration-300 transform hover:scale-105">Shop Collection</a>
    </section>
  </div>
);

export default Craft; 