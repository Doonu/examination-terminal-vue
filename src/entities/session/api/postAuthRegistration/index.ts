import type { IAuthRegister, ISession } from '@/entities/session'
import { API } from '@/shared/config'
import type { APISession } from '@/entities/session/api/postAuthLogin/postAuthLogin.types.ts'
import { postAuthLoginConversation } from '@/entities/session/api/postAuthLogin/postAuthLogin.conversation.ts'
import { useMutation } from '@tanstack/vue-query'
import { computed } from 'vue'

export const postAuthRegistrationKey = 'postAuthRegistration'

const postAuthRegistration = async ({
  password,
  email,
  roleId,
}: IAuthRegister): Promise<ISession> => {
  const formData = new URLSearchParams()
  formData.append('email', email)
  formData.append('password', password)
  formData.append('role_id', `${roleId}`)

  return API<APISession>({
    url: '/api/v1/auth/registration',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData,
  }).then(({ data }) => postAuthLoginConversation(data))
}

export const usePostAuthRegistration = () =>
  useMutation({
    mutationKey: computed(() => [postAuthRegistrationKey]),
    mutationFn: postAuthRegistration,
  })
