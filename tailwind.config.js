/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./Screens/**/*.tsx", "./components/**/*.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2A6DD2",
        secondary: "#707070",
        tertiary: "#6156B2",
        darkPrimary: "#3D53B6",
      },
    },
  },
  plugins: [],
};
