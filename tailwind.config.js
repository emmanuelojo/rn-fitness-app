/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        gray: "#8B8F92",
        dark: "#192126",
        green: "#BBF246",
        yellow: "#F2E205",
        gray2: "#5E6468",
        gray3: "#384046",
        purple: "#A48AED",
        red: "#ED4747",
        gold: "#FCC46F",
        blue: "#95CCE3",
      },
    },
  },
  plugins: [],
};
