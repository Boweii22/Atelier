import React from 'react';

const Privacy = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-stone-50 via-white to-stone-100 animate-fade-in">
    <h1 className="text-4xl font-serif font-light mb-4 animate-fade-in-down">Privacy Policy</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-200 rounded mb-8 animate-grow-in"></div>
    <div className="max-w-2xl text-stone-700 font-light text-lg space-y-8">
      <div className="animate-fade-in-up delay-100">
        <h2 className="text-xl font-medium mb-2">Information We Collect</h2>
        <p>We collect information you provide when you make a purchase, sign up for our newsletter, or contact us. This may include your name, email, address, and payment details.</p>
      </div>
      <div className="animate-fade-in-up delay-200">
        <h2 className="text-xl font-medium mb-2">How We Use Your Information</h2>
        <p>Your information is used to process orders, provide customer support, and send updates if you opt in. We do not sell or share your data with third parties except as needed to fulfill your order.</p>
      </div>
      <div className="animate-fade-in-up delay-300">
        <h2 className="text-xl font-medium mb-2">Your Rights</h2>
        <p>You may request to view, update, or delete your personal information at any time. Contact us at <a href="mailto:hello@atelier.com" className="underline hover:text-stone-900">hello@atelier.com</a> for privacy inquiries.</p>
      </div>
    </div>
  </section>
);

export default Privacy; 