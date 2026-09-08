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
        kavibe: {
          primary: "#A1243A",
          secondary: "#681423",
          accent: "#C84B31",
          soft: "#F8EBEB",
        },
        warm: {
          bg: "#FAF8F5",
          surface: "#F3EEE7",
          card: "#EFE8DE",
          border: "rgba(25, 22, 21, 0.12)",
        },
        ink: {
          dark: "#191615",
          secondary: "#4A443E",
          muted: "#8A8177",
          light: "#FAF8F5",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.15em",
        superwide: "0.25em",
      },
      boxShadow: {
        tactile: "0 2px 10px rgba(25, 22, 21, 0.04)",
        elevated: "0 10px 30px rgba(25, 22, 21, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
