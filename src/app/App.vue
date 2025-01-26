<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ToggleTheme } from '@/features/toggle-theme'
import { useSession } from '@/entities/session'
import { watch } from 'vue'
import router from '@/app/router'

const sessionStore = useSession()

watch(
  () => sessionStore.accessToken,
  (newToken) => {
    if (newToken) {
      if (router.currentRoute.value.name === 'auth') {
        router.push({ name: 'home' })
      }
    } else {
      if (router.currentRoute.value.meta.requiresAuth) {
        router.push({ name: 'auth' })
      }
    }
  },
)
</script>

<template>
  <v-app>
    <header>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/auth">Auth</RouterLink>
      <toggle-theme />
    </header>

    <RouterView />
  </v-app>
</template>

<style scoped></style>
