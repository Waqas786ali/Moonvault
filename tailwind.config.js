/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6142ff",
        secondary: "#b8fd8e",
        subheading: "#FCFCFC",
        heading: "#E4E4E4",
        para: "#D4D4D4",
      },
      fontFamily: {
        'ppneuebit': ['PPNeueBit-Regular', 'sans-serif'],
        'ppneuebit-mono': ['PPSupplyMono-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

