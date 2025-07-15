// Centralized product data for the store
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Handwoven Merino Cardigan',
    price: 298,
    category: 'Knitwear',
    description: 'A luxurious, handwoven merino wool cardigan with a relaxed fit and artisanal details.',
    isNew: true,
  },
  {
    id: 2,
    name: 'Organic Cotton Midi Dress',
    price: 245,
    category: 'Dresses',
    description: 'A breezy, organic cotton midi dress with a flattering silhouette and subtle pleats.',
  },
  {
    id: 3,
    name: 'Linen Blend Blazer',
    price: 385,
    category: 'Outerwear',
    description: 'A tailored linen blend blazer, perfect for layering and versatile styling.',
  },
  {
    id: 4,
    name: 'Silk Charmeuse Blouse',
    price: 195,
    category: 'Tops',
    description: 'A lustrous silk charmeuse blouse with a modern drape and elegant sheen.',
    isNew: true,
  },
  {
    id: 5,
    name: 'Cashmere Turtleneck',
    price: 320,
    category: 'Knitwear',
    description: 'A classic cashmere turtleneck sweater, soft and warm for cooler days.',
  },
  {
    id: 6,
    name: 'Wool Peacoat',
    price: 450,
    category: 'Outerwear',
    description: 'A timeless wool peacoat with double-breasted closure and refined details.',
  },
  {
    id: 7,
    name: 'Pleated Midi Skirt',
    price: 210,
    category: 'Skirts',
    description: 'A flowing pleated midi skirt in a lightweight, sustainable fabric.',
  },
  {
    id: 8,
    name: 'Classic White Shirt',
    price: 120,
    category: 'Tops',
    description: 'A crisp, classic white shirt with a tailored fit and premium cotton.',
  },
  {
    id: 9,
    name: 'Denim Jacket',
    price: 180,
    category: 'Outerwear',
    description: 'A modern take on the denim jacket, featuring a cropped cut and soft wash.',
  },
  {
    id: 10,
    name: 'Printed Maxi Dress',
    price: 260,
    category: 'Dresses',
    description: 'A vibrant printed maxi dress with a flowing silhouette and adjustable straps.',
  },
  {
    id: 11,
    name: 'Eco Linen Wrap Dress',
    price: 270,
    category: 'Dresses',
    description: 'A sustainable linen wrap dress with a flattering tie waist and breezy feel.',
    isNew: true,
  },
  {
    id: 12,
    name: 'Ribbed Wool Beanie',
    price: 60,
    category: 'Accessories',
    description: 'A cozy ribbed wool beanie, hand-finished for comfort and warmth.',
    isNew: true,
  },
  {
    id: 13,
    name: 'Cropped Denim Jacket',
    price: 210,
    category: 'Outerwear',
    description: 'A cropped denim jacket with modern lines and a soft, broken-in feel.',
    isNew: true,
  },
  {
    id: 14,
    name: 'Merino Crewneck Sweater',
    price: 180,
    category: 'Knitwear',
    description: 'A lightweight merino crewneck sweater, perfect for layering year-round.',
    isNew: true,
  },
  {
    id: 15,
    name: 'Leather Crossbody Bag',
    price: 150,
    category: 'Accessories',
    description: 'A minimalist leather crossbody bag with adjustable strap and secure closure.',
  },
  {
    id: 16,
    name: 'Silk Scarf',
    price: 90,
    category: 'Accessories',
    description: 'A hand-printed silk scarf, versatile for styling as a neckerchief or hair accessory.',
  },
  {
    id: 17,
    name: 'Classic Leather Belt',
    price: 80,
    category: 'Accessories',
    description: 'A classic leather belt with a modern buckle, crafted from premium leather.',
  },
  {
    id: 18,
    name: 'Classic Trench Coat',
    price: 390,
    category: 'Outerwear',
    description: 'A water-resistant classic trench coat with a belted waist and timeless appeal.',
  },
]; 