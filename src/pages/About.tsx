import React from 'react';

const team = [
  {
    name: 'Elena Rossi',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
  },
  {
    name: 'Mateo Garcia',
    role: 'Lead Artisan',
    image: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
  },
  {
    name: 'Sofia Kim',
    role: 'Sustainability Lead',
    image: 'https://images.pexels.com/photos/1707827/pexels-photo-1707827.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
  },
];

const values = [
  {
    title: 'Artisanal Excellence',
    desc: 'Every piece is crafted by skilled hands, honoring tradition and innovation.'
  },
  {
    title: 'Sustainability',
    desc: 'We use eco-friendly materials and ethical practices to protect our planet.'
  },
  {
    title: 'Timeless Design',
    desc: 'Our collections are designed to transcend trends and last for generations.'
  },
];

const timeline = [
  {
    year: '2015',
    event: 'Atelier founded with a vision for slow, meaningful fashion.'
  },
  {
    year: '2017',
    event: 'First collection launched, featuring handwoven knitwear.'
  },
  {
    year: '2019',
    event: 'Expanded to include sustainable materials and new artisan partners.'
  },
  {
    year: '2022',
    event: 'Recognized for excellence in ethical fashion.'
  },
];

const About = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center animate-fade-in py-16 px-4">
    <h1 className="text-5xl font-serif font-light mb-8 text-center">About Atelier</h1>
    <p className="text-lg text-stone-700 max-w-2xl text-center mb-12">
      Atelier is a modern fashion house rooted in the belief that true luxury is found in patience, skill, and a passion for excellence. Our journey began with a vision to create clothing that tells a story—one of artistry, sustainability, and timeless beauty.
    </p>
    {/* Values */}
    <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {values.map((v) => (
        <div key={v.title} className="bg-stone-50 rounded-xl p-8 shadow animate-fade-in">
          <h3 className="text-xl font-serif font-light mb-2 text-stone-900">{v.title}</h3>
          <p className="text-stone-600 font-light">{v.desc}</p>
        </div>
      ))}
    </div>
    {/* Timeline */}
    <div className="max-w-3xl w-full mb-16">
      <h2 className="text-2xl font-serif font-light mb-6 text-stone-900 text-center">Our Journey</h2>
      <ol className="relative border-l-2 border-stone-200">
        {timeline.map((t, i) => (
          <li key={t.year} className="mb-10 ml-6 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-stone-900 rounded-full text-white text-sm font-bold">{t.year.slice(2)}</span>
            <div className="pl-2">
              <div className="text-stone-900 font-medium">{t.year}</div>
              <div className="text-stone-600 font-light">{t.event}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
    {/* Team */}
    <div className="max-w-5xl w-full mb-8">
      <h2 className="text-2xl font-serif font-light mb-6 text-stone-900 text-center">Meet the Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {team.map((member, i) => (
          <div key={member.name} className="flex flex-col items-center bg-white rounded-xl shadow p-6 w-60 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <img src={member.image} alt={member.name} className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-stone-200" />
            <div className="text-lg font-serif font-light text-stone-900 mb-1">{member.name}</div>
            <div className="text-stone-500 text-sm">{member.role}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="text-center mt-8">
      <a href="/craft" className="inline-block px-10 py-4 border border-stone-900 text-stone-900 rounded-full font-medium tracking-wide hover:bg-stone-900 hover:text-white transition-all duration-300 transform hover:scale-105">Discover Our Craft</a>
    </div>
  </section>
);

export default About; 