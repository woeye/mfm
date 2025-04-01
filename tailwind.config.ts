import type { Config } from 'tailwindcss'

module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        blue: '#2D83C6',
        red: '#C93437',
        lightgray: '#f9f9f9',
        mediumgray: '#a4a4a4',
        darkgray: '#646464',
        gray: '#CDCDCD',
      },
      fontFamily: {
        'sans-serif': ['var(--font-sans-serif)'],
        'serif': ['var(--font-serif)'],
      },
    },
  },
  plugins: [],
} satisfies Config

