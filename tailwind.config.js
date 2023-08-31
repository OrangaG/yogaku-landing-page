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
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/hero-img.webp')",
        about: "url('/about-us-img.webp')",
        promo: "url('/promo-img-removebg-preview.png')",
        // You should always reference public assets using root absolute path - for example, public/icon.png should be referenced in source code as /icon.png.
      },
      screens: {
        xs: "375px",
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};
