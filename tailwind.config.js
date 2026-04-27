/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient-yellow': 'linear-gradient(180deg, #D5BB54 0%, #837230 100%)',
        'custom-gradient-black': 'linear-gradient(180deg, rgba(213, 187, 84, 0.10) 0%, rgba(23, 23, 23, 0.00) 100%)',
      }
    },

    screens: {
      xxsm: "320px",
      // => @media (min-width: 640px) { ... }
      xsm: "480px",
      // => @media (min-width: 640px) { ... }
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1536px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1536px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};
