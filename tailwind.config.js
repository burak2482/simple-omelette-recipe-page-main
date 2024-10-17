/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customNormal: ['MyCustomFont', 'sans-serif'],
      },
      colors: {
        customWhite: 'hsl(30, 54%, 90%)', 
        customDarkWhite: 'hsl(30, 18%, 87%)', 
        customGrey: 'hsl(30, 10%, 34%)',
        customBlack: 'hsl(24, 5%, 18%)', 
        customPurple: 'hsl(332, 51%, 32%)', 
        customLightWhite: 'hsl(330, 100%, 98%)',
        customBrown: 'hsl(14, 45%, 36%)',
      },
    },
  },
  plugins: [],
};
