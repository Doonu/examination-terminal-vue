import 'vuetify/styles'
import '@/shared/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { queryClient, vuetify } from '@/shared/config'

import App from './app/App.vue'
import router from './app/router'
import 'vuetify/styles'

const app = createApp(App)

app.use(VueQueryPlugin, { queryClient })
app.use(router)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(vuetify)

app.mount('#app')
