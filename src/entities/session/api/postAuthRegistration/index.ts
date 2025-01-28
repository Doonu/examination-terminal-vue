import type { IAuthRegister, ISession } from '@/entities/session'
import { API } from '@/shared/api'
import type { APISession } from '@/entities/session'
import { useMutation } from '@tanstack/vue-query'
import { computed } from 'vue'
import { postAuthRegistrationConversation } from './postAuthRegistration.conversation'
import { validationSchema } from './postAuthRegistration.validation'
import { AxiosError } from 'axios'
import type { ValidationError } from 'yup'
import { DetailsError, type IError } from '@/shared/api'

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
    data: formData,
  })
    .then(async ({ data }) => {
      const validate = await validationSchema.validate(data, { abortEarly: false })
      return postAuthRegistrationConversation(validate)
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

export const usePostAuthRegistration = () =>
  useMutation({
    mutationKey: computed(() => [postAuthRegistrationKey]),
    mutationFn: postAuthRegistration,
  })
