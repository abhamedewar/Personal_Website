/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "1150px",
      pad: "850px",
      sm: "640px", // Custom small screen breakpoint
      md: "768px", // Custom medium screen breakpoint
      lg: "1024px", // Custom large screen breakpoint
      xl: "1280px", // Custom extra-large screen breakpoint
    },
    extend: {
      colors: {
        primary: "#F3F3F3", // Modify an existing color
        secondary: "#F3F3F3", // Add a new color
        sober: "#ECEBEB",
        linkcolor: "#0050FF",
      },
      padding: {
        "safe-bottom": "env(safe-area-inset-bottom)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
