/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        103: "1.03",
      },
      colors: {
        "grey-blue": "#E7EAEF",
      },
      spacing: {
        407: "407px",
      },
    },
  },
  plugins: [],
};
