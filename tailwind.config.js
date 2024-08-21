/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary-red": "#D32F2F",
      "white": "#ffffff",
      "grey":"rgb(245,245,245)"
    },
  },
  plugins: [],
}