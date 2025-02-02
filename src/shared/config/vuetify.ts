import { createVuetify } from 'vuetify'
import { darkThemeColors, lightThemeColors } from './colors'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import '@mdi/font/css/materialdesignicons.css'

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
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
