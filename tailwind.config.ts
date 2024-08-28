import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",    
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md':'891px',      
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      backgroundImage: {
        "hero-desktop": "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8) ), url('/images/hero/hero-desktop.webp')",
        "dark-gradient": "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'gradient-main': "linear-gradient(270deg, #4A97DE 21%, #D21CD6 77%)",
        'gradient-hover': "linear-gradient(270deg, #3d7cb6 21%, #9e18a1 77%)",
        // "gradient-hover": "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: {
        'default': '#B4B4B8'
      },
      textColor: {
        'default': '#519fe9'
      },      
      backgroundColor: {
        'default': '#3F97E9',   
        'container': '#1B1D2A'    
      },
      boxShadow: {
        'custom': '0px 2px 8px 0px rgba(99, 99, 99, 0.2)',
      },
      colors: {
        'bg-border': '#4D4D4D',        
      }
    },
  },
  darkMode: 'class',
  plugins: [],
  
};
export default config;