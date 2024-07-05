/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "noor-regular": ["Noor Regular", "sans-serif"],
      "noor-light": ["Noor Light", "sans-serif"],
      "noor-bold": ["Noor Bold", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
    boxShadow: {
      button: "0px 38.49px 71.48px 0px rgba(0, 0, 0, 0.12)",
    },
  },
  plugins: [],
};
