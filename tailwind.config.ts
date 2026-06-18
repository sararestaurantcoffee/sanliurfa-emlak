import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#284577",
          "primary-dark": "#1e3358",
          "primary-light": "#3a5f9a",
          black: "#212121",
          charcoal: "#333333",
          gray: "#6b6b6b",
          silver: "#9a9a9a",
          mist: "#e5e5e5",
          snow: "#f5f5f5",
          ivory: "#fafafa",
          white: "#ffffff",
          gold: "#b8a078",
          "gold-light": "#d4c4a8",
          footer: "#4a4a4a",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.08)",
        header: "0 2px 8px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
