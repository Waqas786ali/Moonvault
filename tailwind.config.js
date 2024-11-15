/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        mxs: '380px',
      },
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
      animation: {
        Slowspin: 'slowspin 20s linear infinite',
        SlowOvalspin: 'slowspin 10s linear infinite',
      },
      keyframes: {
        slowspin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

