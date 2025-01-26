import { createVuetify } from 'vuetify'
import { darkThemeColors, lightThemeColors } from './colors'

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: lightThemeColors,
      },
      dark: {
        colors: darkThemeColors,
      },
    },
  },
})
