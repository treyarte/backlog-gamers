import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",    
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dark-gradient": "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: {
        'default': '#B4B4B8'
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;