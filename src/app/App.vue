<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { useSession } from '@/entities/session'
import { computed, watch } from 'vue'
import router from '@/app/router'
import { queryClient } from '@/shared/config'
import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import DefaultLayout from './layout/default-layout.vue'
import duration from 'dayjs/plugin/duration'

const sessionStore = useSession()
const route = useRoute()

dayjs.locale(ru)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(duration)

watch(
  () => sessionStore.accessToken,
  (newToken) => {
    queryClient.refetchQueries()

    if (newToken) {
      if (router.currentRoute.value.name === 'auth') {
        router.push({ name: 'home' })
      }
    } else if (router.currentRoute.value.meta.requiresAuth) {
      router.push({ name: 'auth' })
    }
  },
)

const layout = computed(() => {
  return route.meta?.layout ?? DefaultLayout
})
</script>

<template>
  <v-app>
    <component :is="layout">
      <RouterView />
    </component>
  </v-app>
</template>

<style scoped></style>
