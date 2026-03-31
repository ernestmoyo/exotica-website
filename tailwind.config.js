/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A1628",
          800: "#0F1D32",
          700: "#14253E",
          600: "#1A2D4A",
        },
        gold: {
          DEFAULT: "#D4A853",
          light: "#E4C47A",
          dark: "#B8903E",
        },
        cyan: {
          DEFAULT: "#00D4FF",
          dark: "#00A8CC",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        display: [
          "Playfair Display",
          "Georgia",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
