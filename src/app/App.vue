<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useSession } from '@/entities/session'
import { watch } from 'vue'
import router from '@/app/router'
import { queryClient } from '@/shared/config'
import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

const sessionStore = useSession()

dayjs.locale(ru)
dayjs.extend(utc)
dayjs.extend(timezone)

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
</script>

<template>
  <v-app>
    <div class="grid h-max p-4 bg-inherit max-w-[var(--max-desktop)] sm:px-[10px]">
      <div class="flex flex-col flex-1 h-full overflow-hidden max-w-[var(--max-desktop)]">
        <div class="flex gap-[20px]">
          <div>gege</div>
          <RouterView class="flex-1" />
        </div>
      </div>
    </div>
  </v-app>
</template>

<style scoped></style>
