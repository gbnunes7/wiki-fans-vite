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
      "grey":"rgb(245,245,245)",
      "dark-grey-modal":"rgba(33, 33, 33, 0.7);",
      "black":"#6d6d6d",
      "light-red":"#FF7F7F"
    },
  },
  plugins: [],
}