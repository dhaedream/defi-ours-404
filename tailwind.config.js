/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3ABFF8",

          secondary: "#828DF8",

          accent: "#F471B5",

          neutral: "#1D283A",

          "base-100": "#0F1729",

          info: "#0CA6E9",

          success: "#2BD4BD",

          warning: "#F4C152",

          error: "#FB6F84",
        },
      },
    ],
  },
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
