/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#001F3F',
          dark: '#001529',
          light: '#003366',
        },
      },
    },
  },
  plugins: [],
};
