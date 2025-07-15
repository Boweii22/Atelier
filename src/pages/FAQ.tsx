import React from 'react';

const faqs = [
  {
    q: 'How do I choose my size?',
    a: 'Refer to our Size Guide for detailed measurements. If you’re between sizes, we recommend sizing up for comfort.'
  },
  {
    q: 'What is your return policy?',
    a: 'You can return unworn items within 30 days for a full refund or exchange. See our Returns page for details.'
  },
  {
    q: 'How long does shipping take?',
    a: 'Orders are processed within 2 business days. Delivery times vary by location; see our Shipping page for more info.'
  },
  {
    q: 'How do I care for my garment?',
    a: 'Hand wash or use a gentle machine cycle with cold water. See our Care Instructions for more tips.'
  },
  {
    q: 'How can I contact support?',
    a: 'Use our Contact page or email hello@atelier.com. We’re here to help!'
  },
];

const FAQ = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-stone-50 via-white to-stone-100 animate-fade-in">
    <h1 className="text-4xl font-serif font-light mb-4 animate-fade-in-down">FAQ</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-200 rounded mb-8 animate-grow-in"></div>
    <div className="max-w-2xl w-full space-y-6">
      {faqs.map((faq, i) => (
        <div key={faq.q} className="bg-white rounded-lg shadow p-6 animate-fade-in-up" style={{ animationDelay: `${100 + i * 80}ms` }}>
          <div className="text-lg font-medium text-stone-900 mb-2">{faq.q}</div>
          <div className="text-stone-700 text-base font-light">{faq.a}</div>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ; 