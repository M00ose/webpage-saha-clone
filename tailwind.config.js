/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#0099CC",
      offBlack: "#001A22",
      offGrey: "#BFE5F2",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Lora", "serif"],
    },
  },
};
