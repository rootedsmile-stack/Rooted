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
        // Primary earthy browns/tans (from your brand guide)
        primary: {
          50: '#f5f5f0',
          100: '#e7e5dc',
          200: '#d4cfbd',
          300: '#beb59d',
          400: '#a89a7e',
          500: '#8b7d61',
          600: '#6b5f48',
          700: '#4d4433',
          800: '#2f2b20',
          900: '#1a1814',
        },
        // Secondary warm neutrals
        secondary: {
          50: '#f7f5f2',
          100: '#ebe7e0',
          200: '#ddd5c8',
          300: '#cfc3af',
          400: '#b8a889',
          500: '#9c8a69',
          600: '#7d6d53',
          700: '#5f5240',
          800: '#423829',
          900: '#2a2218',
        },
        // Accent rustic brown (from #562F2B in brand guide)
        accent: {
          300: '#9c7a5e',
          400: '#8b6a4f',
          500: '#6b5240',
          600: '#5a4435',
        },
        // Dark teal background (from #2F464C in brand guide)
        teal: {
          50: '#f0f5f4',
          100: '#d6e6e3',
          200: '#b8d4cf',
          300: '#8bb8af',
          400: '#5e9c8f',
          500: '#3d7f73',
          600: '#2f645c',
          700: '#244a45',
          800: '#1a332f',
          900: '#0f1f1d',
        },
        // Cream/beige (from #F5F467 area in brand guide)
        cream: {
          50: '#fdfcf8',
          100: '#faf7ed',
          200: '#f5f0db',
          300: '#ede4c3',
          400: '#e3d6a8',
          500: '#d4c38e',
          600: '#bfab76',
          700: '#a28f5f',
          800: '#7d6d4a',
          900: '#5f5238',
        },
      },
      
      backgroundColor: {
        'glass': 'rgba(42, 34, 24, 0.40)',
        'surface': 'rgba(255, 255, 255, 0.05)',
        'surface-hover': 'rgba(255, 255, 255, 0.08)',
      },
      
      borderColor: {
        'subtle': 'rgba(139, 106, 79, 0.15)',
        'default': 'rgba(139, 106, 79, 0.30)',
        'strong': 'rgba(139, 106, 79, 0.50)',
      },
      
      backdropBlur: {
        'glass': '20px',
      },
      
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.30)',
        'soft': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'elevated': '0 12px 48px rgba(0, 0, 0, 0.25)',
      },
      
      borderRadius: {
        'card': '0.75rem',
        'panel': '1.25rem',
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'Garamond', 'serif'],
      },
      
      fontWeight: {
        extralight: '200',
        light: '300',
      },
      
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        wide: '0.02em',
        wider: '0.05em',
        widest: '0.15em',
      },
      
      transitionDuration: {
        'fast': '150',
        'normal': '300',
        'slow': '500',
      },
      
      backgroundImage: {
        // Dark teal gradient backgrounds
        'gradient-hero': 'linear-gradient(135deg, #2f645c 0%, #244a45 50%, #1a332f 100%)',
        'gradient-section': 'linear-gradient(180deg, rgba(36, 74, 69, 0.8) 0%, rgba(26, 51, 47, 0.95) 100%)',
        'gradient-overlay': 'radial-gradient(circle at center, rgba(61, 127, 115, 0.25) 0%, rgba(36, 74, 69, 0.15) 50%, transparent 100%)',
        'gradient-footer': 'linear-gradient(180deg, #1a332f 0%, #0f1f1d 100%)',
        
        // Rustic brown button gradients
        'gradient-button': 'linear-gradient(135deg, #8b6a4f 0%, #6b5240 100%)',
        'gradient-button-hover': 'linear-gradient(135deg, #9c7a5e 0%, #8b6a4f 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
