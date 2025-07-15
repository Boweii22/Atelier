import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { items, update, remove } = useCart();
  const navigate = useNavigate();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center animate-fade-in py-16 px-4">
      <h1 className="text-4xl font-serif font-light mb-8">Your Cart</h1>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        {items.length === 0 ? (
          <p className="text-lg text-stone-700 font-light text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-stone-100 mb-6">
              {items.map(item => (
                <li key={item.id} className="flex items-center py-4 gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-lg border border-stone-100" />
                  <div className="flex-1">
                    <div className="text-lg font-serif font-light text-stone-900">{item.name}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-stone-500 text-sm">Qty:</span>
                      <input
                        type="number"
                        min={1}
                        value={item.qty}
                        onChange={e => update(item.id, Math.max(1, Number(e.target.value)))}
                        className="w-16 px-2 py-1 border border-stone-200 rounded text-stone-900 text-sm"
                      />
                      <button className="ml-2 text-red-500 hover:underline text-xs" onClick={() => remove(item.id)}>Remove</button>
                    </div>
                  </div>
                  <div className="text-lg font-medium text-stone-900">${item.price * item.qty}</div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-serif font-light text-stone-900">Subtotal</span>
              <span className="text-xl font-medium text-stone-900">${subtotal}</span>
            </div>
            <button className="w-full py-4 bg-stone-900 text-white rounded font-medium text-lg hover:bg-stone-800 transition" onClick={() => navigate('/checkout')}>Checkout</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart; 