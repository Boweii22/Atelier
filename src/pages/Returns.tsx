import React from 'react';

const Returns = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-stone-50 via-white to-stone-100 animate-fade-in">
    <h1 className="text-4xl font-serif font-light mb-4 animate-fade-in-down">Returns</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-200 rounded mb-8 animate-grow-in"></div>
    <div className="max-w-2xl text-stone-700 font-light text-lg space-y-6 text-center">
      <p className="animate-fade-in-up delay-100">
        We want you to love your Atelier purchase. If you’re not completely satisfied, you may return unworn items within 30 days of delivery for a full refund or exchange.
      </p>
      <ul className="list-disc list-inside text-left mx-auto animate-fade-in-up delay-200">
        <li>Items must be in original condition with tags attached.</li>
        <li>Contact our support team to initiate a return.</li>
        <li>Refunds are processed within 5 business days after we receive your return.</li>
      </ul>
    </div>
  </section>
);

export default Returns; 