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
        cream: "#FDF6EE",
        "cream-card": "#F5EFE6",
        ink: "#2B180A",
        taupe: "#94877C",
        "taupe-light": "#B5AA9F",
        ember: "#E05A3A",
        "ember-deep": "#C93A22",
      },
      fontFamily: {
        serif: ["'Source Serif 4'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.04em",
        heading: "-0.02em",
      },
      borderRadius: {
        card: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
