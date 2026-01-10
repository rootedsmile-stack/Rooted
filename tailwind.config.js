// tailwind.config.ts
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
        // UPDATED: Exact Primary & Secondary Palette from Brand Guide
        primary: {
          50: '#f5f5f0',
          500: '#8b7d61',
          900: '#1a1814',
        },
        // The deep moody teal shown in background
        brandTeal: {
          DEFAULT: '#2F464C', 
          900: '#0f1f1d',
        },
        // The "Rustic Brown" used for buttons/accents
        brandBrown: {
          DEFAULT: '#6B2F2B',
          hover: '#8b3d37',
        },
        // The signature cream for text/lines
        brandCream: {
          DEFAULT: '#F5F467',
        }
      },
      backgroundColor: {
        'glass': 'rgba(26, 24, 20, 0.45)', // Darker glass for better contrast
        'surface': 'rgba(255, 255, 255, 0.05)',
      },
      borderColor: {
        'subtle': 'rgba(245, 244, 103, 0.15)', // Using brandCream opacity
        'brand': 'rgba(107, 47, 43, 0.30)',  // Using brandBrown opacity
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'], // Essential for the logo look
        serif: ['Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.15em',
      },
      backgroundImage: {
        // Moody gradient from image: Teal to Dark
        'rustic-hero': 'linear-gradient(135deg, #2F464C 0%, #1a1814 100%)',
        'rustic-footer': 'linear-gradient(180deg, #1a1814 0%, #0f1f1d 100%)',
        
        // Brown button gradients from image palette
        'btn-brown': 'linear-gradient(135deg, #6B2F2B 0%, #4d1f1b 100%)',
        'btn-brown-hover': 'linear-gradient(135deg, #8b3d37 0%, #6B2F2B 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
