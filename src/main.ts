import '@/shared/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

import { queryClient } from '@/shared/config'

import App from './app/App.vue'
import router from './app/router'

const app = createApp(App)

app.use(VueQueryPlugin, { queryClient })
app.use(createPinia())
app.use(router)

app.mount('#app')
