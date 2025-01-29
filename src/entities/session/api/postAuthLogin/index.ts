import type { APISession, IAuthLogin, ISession } from '@/entities/session'
import { API } from '@/shared/api'
import { useMutation } from '@tanstack/vue-query'
import { computed } from 'vue'
import { AxiosError } from 'axios'
import { DetailsError, type IError } from '@/shared/api'
import type { ValidationError } from 'yup'
import { sessionValidation } from '../../lib/session.validation'
import { sessionConversation } from '../../lib/session.conversation'

export const postAuthLoginKey = 'postAuthLogin'

const postAuthLogin = async ({ password, email }: IAuthLogin): Promise<ISession> => {
  const formData = new URLSearchParams()
  formData.append('email', email)
  formData.append('password', password)

  return API<APISession>({
    url: '/api/v1/auth/login',
    method: 'POST',
    data: formData,
  })
    .then(async ({ data }) => {
      const validate = await sessionValidation.validate(data, { abortEarly: false })
      return sessionConversation(validate)
    })
    .catch((error: AxiosError<IError> | ValidationError) => {
      if (error instanceof AxiosError) {
        throw new DetailsError('/orders/getOrders', {
          status: error.response?.status,
          error: { errorID: error.response?.data.ErrorID, message: error.response?.data.Message },
        })
      }
      const validation = error.inner.map((error) => error.message)
      throw new DetailsError('/orders/getOrders', { validation })
    })
}

export const usePostAuthLogin = () =>
  useMutation({
    mutationKey: computed(() => [postAuthLoginKey]),
    mutationFn: postAuthLogin,
  })
