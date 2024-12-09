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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },  

      },
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
        gradient: "gradient 8s linear infinite",
       
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};
export default config;
