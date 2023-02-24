/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-color": "#ff385c",
        secondary: "#222",
        tc: "#717171",
        lb: "rgba(0, 0, 0, 0.12)",
        // overlay: "rgba(0, 0, 0, 0.25)",
        db: "rgba(198, 184, 184, 0.94)",
        grey: "#f7f7f7",
        overlay: "rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
