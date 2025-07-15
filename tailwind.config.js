/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        stone: {
          50: '#fefcf7',
          100: '#f7f5f0',
          200: '#e8e2d4',
          300: '#d2c5b0',
          400: '#b8a587',
          500: '#a8b5a0',
          600: '#8b6f47',
          700: '#78716c',
          800: '#57534e',
          900: '#2d2d2d',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e8ede8',
          200: '#d3dbd3',
          300: '#a8b5a0',
          400: '#8a9b8a',
          500: '#6d7d6d',
          600: '#5a6b5a',
          700: '#4a5a4a',
          800: '#3d4a3d',
          900: '#2d3a2d',
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '8000': '8000ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      aspectRatio: {
        '4/5': '4 / 5',
      },
    },
  },
  plugins: [],
};