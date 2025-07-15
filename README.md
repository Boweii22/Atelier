# Atelier E-Commerce

A modern, visually stunning e-commerce web app for artisanal fashion brands. Built with React, Vite, and Tailwind CSS, Atelier features beautiful animations, dynamic product images, a persistent cart, and a polished, mobile-friendly design.

---

## ✨ Features
- **Animated Hero & Sections**: Smooth entrance animations and premium typography.
- **Dynamic Product Catalog**: 18+ products with real images from the Pexels API.
- **Global Cart**: Add, update, and remove items; persistent with localStorage.
- **Quick Shop Modal**: Instantly view and add products to cart.
- **Category & Info Pages**: About, Artisans, Sustainability, Journal, Contact, and more.
- **Support & Legal Pages**: Size Guide, Care, Returns, Shipping, FAQ, Privacy, Terms, Cookies.
- **Responsive Design**: Looks great on all devices.
- **Toast Notifications**: For actions and feedback.

---

## 🛠️ Tech Stack
- **React 18** + **Vite**
- **TypeScript**
- **Tailwind CSS**
- **React Router**
- **Pexels API** (for product images)

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/atelier-ecommerce.git
cd atelier-ecommerce
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root with your Pexels API key:
```
VITE_PEXELS_API_KEY=your_pexels_api_key_here
```
Get a free API key at [pexels.com/api](https://www.pexels.com/api/).

### 4. Start the dev server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## ⚙️ Project Structure
```
Atelier/
  src/
    components/      # UI components (Hero, Footer, ProductCard, etc.)
    pages/           # All main and info pages
    contexts/        # Global state (CartContext)
    data/            # Centralized product data
    index.css        # Tailwind & custom styles
    App.tsx          # Main app and routing
  public/
  package.json
  tailwind.config.js
  vite.config.ts
  README.md
```

---

## 🌐 Environment Variables
- `VITE_PEXELS_API_KEY` — Required for fetching product images.

---

## 🙏 Credits
- **Design & Code**: [Your Name]
- **Images**: [Pexels](https://www.pexels.com/)
- **Fonts**: Playfair Display, Inter (Google Fonts)

---

## 📄 License
MIT 