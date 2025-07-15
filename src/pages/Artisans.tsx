import React from 'react';

const artisans = [
  {
    name: 'Elena Rossi',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
    bio: 'Elena leads our creative vision, blending tradition with innovation in every collection.'
  },
  {
    name: 'Mateo Garcia',
    role: 'Lead Artisan',
    image: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
    bio: 'Mateo brings decades of experience in handcrafting garments, ensuring every piece is unique.'
  },
  {
    name: 'Sofia Kim',
    role: 'Sustainability Lead',
    image: 'https://images.pexels.com/photos/1707827/pexels-photo-1707827.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
    bio: 'Sofia champions our eco-friendly initiatives and ethical sourcing.'
  },
];

const Artisans = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-stone-50 via-white to-stone-100 animate-fade-in">
    <h1 className="text-4xl font-serif font-light mb-4 animate-fade-in-down">Meet Our Artisans</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-200 rounded mb-8 animate-grow-in"></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
      {artisans.map((artisan, i) => (
        <div
          key={artisan.name}
          className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up`}
          style={{ animationDelay: `${150 + i * 100}ms` }}
        >
          <img src={artisan.image} alt={artisan.name} className="w-32 h-40 object-cover rounded-lg mb-4 shadow-md" />
          <div className="text-xl font-serif font-light text-stone-900 mb-1">{artisan.name}</div>
          <div className="text-stone-500 text-sm mb-2">{artisan.role}</div>
          <div className="text-stone-700 text-sm text-center">{artisan.bio}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Artisans; 