import React from 'react';

const Terms = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-stone-50 via-white to-stone-100 animate-fade-in">
    <h1 className="text-4xl font-serif font-light mb-4 animate-fade-in-down">Terms of Service</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-200 rounded mb-8 animate-grow-in"></div>
    <div className="max-w-2xl text-stone-700 font-light text-lg space-y-8">
      <div className="animate-fade-in-up delay-100">
        <h2 className="text-xl font-medium mb-2">Use of Site</h2>
        <p>By using this site, you agree to comply with all applicable laws and these terms. You may not use our content or products for unlawful purposes.</p>
      </div>
      <div className="animate-fade-in-up delay-200">
        <h2 className="text-xl font-medium mb-2">Purchases</h2>
        <p>All purchases are subject to availability and our acceptance. We reserve the right to refuse or cancel orders at our discretion.</p>
      </div>
      <div className="animate-fade-in-up delay-300">
        <h2 className="text-xl font-medium mb-2">Limitation of Liability</h2>
        <p>Atelier is not liable for any indirect or consequential damages arising from your use of this site or our products.</p>
      </div>
    </div>
  </section>
);

export default Terms; 