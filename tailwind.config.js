/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FAF7F2', dark: '#F0EBE3' },
        terra: { DEFAULT: '#C8553D', dark: '#A3412E', light: '#D97B6A' },
        ocean: { DEFAULT: '#2D3E50', light: '#3D5166', dark: '#1E2D3D' },
        gold: { DEFAULT: '#D4A853', light: '#E4C47A', dark: '#B8903E' },
        forest: { DEFAULT: '#3D8B6E', dark: '#2D6A4F', light: '#52B788' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
