/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        112: "36rem",
        128: "40rem",
      },
    },
    screens: {
      // sm: { min: "640px", max: "767px" },
      // // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { max: "1250px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1251px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // xl: { min: "1280px", max: "1535px" },
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // "2xl": { min: "1536px" },
      // // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
