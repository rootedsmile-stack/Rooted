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
        // Exact brand colors from your mockup image
        brandTeal: '#2F464C',
        brandBrown: '#6B2F2B',
        brandCream: '#F5F467',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'], // Required for the logo style
      },
    },
  },
  plugins: [],
};

export default config;
