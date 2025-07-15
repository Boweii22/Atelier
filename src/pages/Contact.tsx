import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-stone-50 via-white to-stone-100 animate-fade-in">
      <h1 className="text-4xl font-serif font-light mb-4 animate-fade-in-down">Contact Us</h1>
      <div className="w-24 h-1 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-200 rounded mb-8 animate-grow-in"></div>
      <div className="max-w-xl w-full">
        {submitted ? (
          <div className="text-center text-lg text-stone-700 font-light animate-fade-in-up">
            Thank you for reaching out! We’ll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in-up">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-stone-200 rounded focus:outline-none focus:border-stone-900 text-stone-900 text-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-stone-200 rounded focus:outline-none focus:border-stone-900 text-stone-900 text-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-stone-200 rounded focus:outline-none focus:border-stone-900 text-stone-900 text-lg"
              rows={5}
              required
            />
            <button type="submit" className="w-full py-3 bg-stone-900 text-white rounded font-medium hover:bg-stone-800 active:scale-95 transition-all duration-200">
              Send Message
            </button>
          </form>
        )}
        <div className="mt-8 text-center text-stone-600 text-sm animate-fade-in-up delay-200">
          Or email us at <a href="mailto:hello@atelier.com" className="underline hover:text-stone-900">hello@atelier.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 