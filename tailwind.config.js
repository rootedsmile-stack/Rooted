/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Teal palette
        teal: {
          50: '#f0f5f5',
          100: '#dae5e6',
          200: '#b8ccce',
          300: '#8fb0b3',
          400: '#6a9498',
          500: '#5A7A7C', // Main teal
          600: '#4A6668',
          700: '#3A5658',
          800: '#2D4446',
          900: '#2D3F40', // Charcoal
          950: '#1a2627',
        },
        // Gold accent palette
        gold: {
          50: '#faf6f0',
          100: '#f2e8d9',
          200: '#e5d0b3',
          300: '#d4b388',
          400: '#C9A227',
          500: '#B8976A', // Main gold
          600: '#A8866A',
          700: '#8a6d4e',
          800: '#725a42',
          900: '#5f4b38',
        },
        // Stone/cream palette
        stone: {
          50: '#fdfcfa',
          100: '#f8f6f2',
          200: '#F4E5D3',
          300: '#E8E4DC', // Main stone
          400: '#d4cfc4',
          500: '#b8b2a6',
          600: '#9a9488',
          700: '#7d776c',
          800: '#635e55',
          900: '#4a4640',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(45, 63, 64, 0.15)',
        'luxury-lg': '0 10px 40px rgba(45, 63, 64, 0.2)',
        'glow-teal': '0 0 30px rgba(90, 122, 124, 0.3)',
        'glow-gold': '0 0 30px rgba(184, 151, 106, 0.3)',
      },
    },
  },
  plugins: [],
}
