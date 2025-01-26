import type { IAuthLogin, ISession } from '@/entities/session'
import { API } from '@/shared/config'
import { useMutation } from '@tanstack/vue-query'
import { computed } from 'vue'
import type { APISession } from './postAuthLogin.types'
import { postAuthLoginConversation } from './postAuthLogin.conversation'

export const postAuthLoginKey = 'postAuthLogin'

const postAuthLogin = async ({ password, email }: IAuthLogin): Promise<ISession> => {
  const formData = new URLSearchParams()
  formData.append('email', email)
  formData.append('password', password)

  return API<APISession>({
    url: '/api/v1/auth/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData,
  }).then(({ data }) => postAuthLoginConversation(data))
}

export const usePostAuthLogin = () =>
  useMutation({
    mutationKey: computed(() => [postAuthLoginKey]),
    mutationFn: postAuthLogin,
  })
