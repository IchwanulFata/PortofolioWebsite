/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#67e8f9",
        secondary: "#e2e8f0",
        dark: "#f1f5f9",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
