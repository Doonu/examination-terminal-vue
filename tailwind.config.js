import { darkThemeColors, lightThemeColors } from './src/shared/config/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: lightThemeColors,
        dark: darkThemeColors,
      },
    },
  },
  plugins: [],
}
