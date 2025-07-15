import React from 'react';

const Cookies = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-stone-50 via-white to-stone-100 animate-fade-in">
    <h1 className="text-4xl font-serif font-light mb-4 animate-fade-in-down">Cookie Policy</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-200 rounded mb-8 animate-grow-in"></div>
    <div className="max-w-2xl text-stone-700 font-light text-lg space-y-8">
      <div className="animate-fade-in-up delay-100">
        <h2 className="text-xl font-medium mb-2">What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device to help us improve your experience and analyze site usage.</p>
      </div>
      <div className="animate-fade-in-up delay-200">
        <h2 className="text-xl font-medium mb-2">How We Use Cookies</h2>
        <p>We use cookies to remember your preferences, keep you logged in, and gather analytics to enhance our site. We do not use cookies to collect sensitive personal information.</p>
      </div>
      <div className="animate-fade-in-up delay-300">
        <h2 className="text-xl font-medium mb-2">Your Choices</h2>
        <p>You can manage or disable cookies in your browser settings. By using our site, you consent to our use of cookies as described in this policy.</p>
      </div>
    </div>
  </section>
);

export default Cookies; 