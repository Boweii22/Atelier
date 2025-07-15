import React from 'react';

const SizeGuide = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-stone-50 via-white to-stone-100 animate-fade-in">
    <h1 className="text-4xl font-serif font-light mb-4 animate-fade-in-down">Size Guide</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-200 rounded mb-8 animate-grow-in"></div>
    <div className="max-w-2xl text-stone-700 font-light text-lg space-y-6 text-center mb-8">
      <p className="animate-fade-in-up delay-100">
        Find your perfect fit. Our garments are designed for comfort and style. If you’re between sizes, we recommend sizing up for a relaxed look.
      </p>
    </div>
    <div className="overflow-x-auto w-full max-w-2xl animate-fade-in-up delay-200">
      <table className="min-w-full border border-stone-200 rounded-lg bg-white shadow">
        <thead>
          <tr className="bg-stone-100">
            <th className="px-4 py-2 text-stone-700 font-medium">Size</th>
            <th className="px-4 py-2 text-stone-700 font-medium">Bust (in)</th>
            <th className="px-4 py-2 text-stone-700 font-medium">Waist (in)</th>
            <th className="px-4 py-2 text-stone-700 font-medium">Hips (in)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">XS</td>
            <td className="px-4 py-2">31-32</td>
            <td className="px-4 py-2">24-25</td>
            <td className="px-4 py-2">34-35</td>
          </tr>
          <tr className="bg-stone-50">
            <td className="px-4 py-2">S</td>
            <td className="px-4 py-2">33-34</td>
            <td className="px-4 py-2">26-27</td>
            <td className="px-4 py-2">36-37</td>
          </tr>
          <tr>
            <td className="px-4 py-2">M</td>
            <td className="px-4 py-2">35-36</td>
            <td className="px-4 py-2">28-29</td>
            <td className="px-4 py-2">38-39</td>
          </tr>
          <tr className="bg-stone-50">
            <td className="px-4 py-2">L</td>
            <td className="px-4 py-2">37-39</td>
            <td className="px-4 py-2">30-32</td>
            <td className="px-4 py-2">40-42</td>
          </tr>
          <tr>
            <td className="px-4 py-2">XL</td>
            <td className="px-4 py-2">40-42</td>
            <td className="px-4 py-2">33-35</td>
            <td className="px-4 py-2">43-45</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default SizeGuide; 