/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#F2EDE3', dark: '#E6DFD0', light: '#F8F4EB' },
        ink: { DEFAULT: '#111111', soft: '#1C1C1C', mid: '#2A2A2A' },
        ocean: { DEFAULT: '#111111', light: '#2A2A2A', dark: '#0A0A0A' },
        terra: { DEFAULT: '#9C5440', dark: '#7A3E2D', light: '#BA7460' },
        gold: { DEFAULT: '#B8935B', light: '#D4B583', dark: '#8E6E40' },
        forest: { DEFAULT: '#5C7A6A', dark: '#3E5C4D', light: '#7E9D8C' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        editorial: '0.32em',
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
};
