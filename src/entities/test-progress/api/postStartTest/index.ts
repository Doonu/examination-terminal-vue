import { API, DetailsError, type IError } from '@/shared/api'
import { AxiosError } from 'axios'
import type { ValidationError } from 'yup'
import { useMutation } from '@tanstack/vue-query'

export interface PostStartTestParams {
  testProgressId?: number
}

const postStartTestKey = 'postStartTest'

export const postStartTest = async ({ testProgressId }: PostStartTestParams): Promise<void> => {
  return API({
    url: `/api/v1/test-progress/${testProgressId}/start-test`,
    method: 'POST',
  })
    .then(({ data }) => data)
    .catch((error: AxiosError<IError> | ValidationError) => {
      if (error instanceof AxiosError) {
        throw new DetailsError('/test-progress/start-test', {
          status: error.response?.status,
          error: { errorID: error.response?.data.ErrorID, message: error.response?.data.Message },
        })
      }
      const validation = error.inner.map((error) => error.message)
      throw new DetailsError('/test-progress/start-test', { validation })
    })
}

export const usePostStartTest = (args: PostStartTestParams) =>
  useMutation({
    mutationKey: [postStartTestKey, args],
    mutationFn: () => postStartTest(args),
  })
