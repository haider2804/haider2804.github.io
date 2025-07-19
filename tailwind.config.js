/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EFF6FF",
          600: "#2563EB",
          900: "#1E3A8A",
        },
        red: {
          100: "#FEE2E2",
          200: "#FECACA",
          600: "#DC2626",
          700: "#B91C1C",
        },
      },
    },
  },
  plugins: [],
}