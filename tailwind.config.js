/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },

    extend: {
      inset: {
        50: "50px",
      },
      fontFamily: {
        "custom-fn": ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "main-color": "#d1002c",
        "main-color-hover": "#d1002cb5",
        "secondary-color": "#a0a0b4",
        "headers-color": "rgba(0, 0, 0, 0.8)",
      },
      borderRadius: {
        "main-BR": "3px",
      },
      borderColor: {
        "main-BC": "#d1002c",
      },
      borderWidth: {
        "main-BW": "1px",
      },
    },
  },
  plugins: [],
};
