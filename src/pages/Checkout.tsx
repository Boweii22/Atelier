import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { items, clear } = useCart();
  const [form, setForm] = useState({ name: '', email: '', address: '', payment: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address || !form.payment) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setSubmitted(true);
    clear();
    setTimeout(() => navigate('/'), 3000);
  };

  if (submitted) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center animate-fade-in py-16 px-4">
        <h1 className="text-4xl font-serif font-light mb-6">Thank you for your order!</h1>
        <p className="text-lg text-stone-700 max-w-xl text-center mb-8">Your order has been placed. You’ll receive a confirmation email soon.</p>
        <div className="w-16 h-1 bg-stone-300 rounded mb-4"></div>
      </section>
    );
  }

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center animate-fade-in py-16 px-4">
      <h1 className="text-4xl font-serif font-light mb-8">Checkout</h1>
      <form className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 text-stone-700 font-medium">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 border border-stone-200 rounded focus:outline-none focus:border-stone-900 text-stone-900 text-lg" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-stone-700 font-medium">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 border border-stone-200 rounded focus:outline-none focus:border-stone-900 text-stone-900 text-lg" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-stone-700 font-medium">Address</label>
          <input name="address" value={form.address} onChange={handleChange} className="w-full px-4 py-3 border border-stone-200 rounded focus:outline-none focus:border-stone-900 text-stone-900 text-lg" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-stone-700 font-medium">Payment Info</label>
          <input name="payment" value={form.payment} onChange={handleChange} className="w-full px-4 py-3 border border-stone-200 rounded focus:outline-none focus:border-stone-900 text-stone-900 text-lg" required placeholder="Card number (simulated)" />
        </div>
        <div className="mb-6 flex justify-between items-center">
          <span className="text-xl font-serif font-light text-stone-900">Total</span>
          <span className="text-xl font-medium text-stone-900">${subtotal}</span>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button className="w-full py-4 bg-stone-900 text-white rounded font-medium text-lg hover:bg-stone-800 transition">Place Order</button>
      </form>
    </section>
  );
};

export default Checkout; 