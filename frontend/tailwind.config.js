/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      h1: "2.5rem",
    },
    fontFamily: {
      kalam: ["Kalam", "cursive"],
      nunito: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [],
};
