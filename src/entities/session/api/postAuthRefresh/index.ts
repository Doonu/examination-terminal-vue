import { API, DetailsError, type IError } from '@/shared/api'
import { type APISession, type ISession, useSession } from '@/entities/session'
import { validationSchema } from '@/entities/session/api/postAuthRegistration/postAuthRegistration.validation.ts'
import { postAuthRegistrationConversation } from '@/entities/session/api/postAuthRegistration/postAuthRegistration.conversation.ts'
import { AxiosError } from 'axios'
import type { ValidationError } from 'yup'

export const refreshSession = async ({
  refreshToken,
}: Pick<ISession, 'refreshToken'>): Promise<ISession> => {
  const { clearSession } = useSession()

  return API<APISession>({
    url: '/api/v1/auth/refresh',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  })
    .then(async ({ data }) => {
      const validate = await validationSchema.validate(data, { abortEarly: false })
      return postAuthRegistrationConversation(validate)
    })
    .catch((error: AxiosError<IError> | ValidationError) => {
      if (error instanceof AxiosError) {
        window.location.reload()
        clearSession()

        throw new DetailsError('/auth/refresh', {
          status: error.response?.status,
          error: { errorID: error.response?.data.ErrorID, message: error.response?.data.Message },
        })
      }
      const validation = error.inner.map((error) => error.message)
      throw new DetailsError('/auth/refresh', { validation })
    })
}
