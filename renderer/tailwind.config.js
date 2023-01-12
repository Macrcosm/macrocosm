/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      fontSize: {
        title: "40px",
      },
      cursor: {
        edit: "url(/icons/edit.svg), pointer",
      },
    },
    colors: {
      primary: "var(--color-primary)",
      grey: {
        50: "rgb(var(--color-grey-50) / <alpha-value>)",
        100: "var(--color-grey-100)",
        200: "var(--color-grey-200)",
        300: "var(--color-grey-300)",
        400: "var(--color-grey-400)",
        500: "var(--color-grey-500)",
        600: "var(--color-grey-600)",
        700: "var(--color-grey-700)",
        800: "var(--color-grey-800)",
        900: "var(--color-grey-900)",
      },
      blue: {
        800: "var(--color-blue-800)",
        900: "var(--color-blue-900)",
      },
      bg: "var(--color-bg)",
      pink: "var(--color-pink)",
      black: "rgb(var(--color-black) / <alpha-value>)",
      "black-chip": "rgb(var(--color-black-chip) / <alpha-value>)",
      yellow: "var(--color-yellow)",
      border: "var(--color-border)",
      transparent: "transparent",
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      // addVariant("child-hover", "& > *:hover");
    },
  ],
};
