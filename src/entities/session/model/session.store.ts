import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ISession } from '@/entities/session'

export const useSession = defineStore(
  'session',
  () => {
    const accessToken = ref<null | string>(null)
    const refreshToken = ref<null | string>(null)

    const updateSession = (session: ISession) => {
      accessToken.value = session.accessToken
      refreshToken.value = session.refreshToken
    }

    return { accessToken, refreshToken, updateSession }
  },
  {
    persist: true,
  },
)
