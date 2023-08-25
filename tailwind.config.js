/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "green-dark": "#9fd1c0",
      green: "#b3f0da",
      "gray-dark": "#463f58",
      "gray-light": "#4d4f63",
      white: "#f6f4f0",
      white2: "#cbc9d1",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('./hero-img.webp')",
      },
    },
  },
  plugins: [],
};
