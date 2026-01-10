import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandTeal: '#2F464C',
        brandTealLight: '#44666e', // New lighter teal for gradients
        brandBrown: '#6B2F2B',
        brandCream: '#F5F467',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        // Lighter, more vibrant teal gradient utility
        'gradient-vibrant': 'linear-gradient(180deg, #44666e 0%, #2F464C 100%)',
        'btn-rustic': 'linear-gradient(135deg, #6B2F2B 0%, #4a1e1b 100%)',
      }
    },
  },
  plugins: [],
};

export default config;
