import { API, DetailsError, type IError } from '@/shared/api'
import { type APISession, type ISession, useSession } from '@/entities/session'
import { AxiosError } from 'axios'
import type { ValidationError } from 'yup'
import { sessionValidation } from '../../lib/session.validation'
import { sessionConversation } from '../../lib/session.conversation'

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
      const validate = await sessionValidation.validate(data, { abortEarly: false })
      return sessionConversation(validate)
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
