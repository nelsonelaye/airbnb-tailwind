/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-color": "#ff385c",
        secondary: "#222",
        fade: "#717171",
        grey: "#f7f7f7",
        overlay: "rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
