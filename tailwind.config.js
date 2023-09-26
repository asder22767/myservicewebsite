/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1121px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        merriweather: "Merriweather",
        opensans: "Open Sans",
      },
      backgroundImage: {
        herobackground: "url('./assets/images/herobg.png')",
      },
      colors: {
        navcolor: "#141B2D",
        btn: "#1C3988",
        darkblue: "#091638",
        lightgray: "#F3F3FA",
        inputcolor: "#141B2D",
      },
    },
  },
  plugins: [],
};
