/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest:    "#0F3D2E",
        forest2:   "#1A5C44",
        sage:      "#5A8A72",
        cream:     "#F5F1E8",
        parchment: "#EDE7D8",
        tan:       "#C8BC9F",
        charcoal:  "#1C1C1C",
        muted:     "#8A8070",
        dim:       "#5A5448",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans:  ["Jost", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
