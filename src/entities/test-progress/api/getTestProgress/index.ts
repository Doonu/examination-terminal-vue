import { API, DetailsError, type IError } from '@/shared/api'
import type { APITestProgress, ITestProgress } from '@/entities/test-progress'
import { testProgressValidation } from '../../lib/test-progress.validation'
import { testProgressConversation } from '../../lib/test-progress.conversation'
import { AxiosError } from 'axios'
import type { ValidationError } from 'yup'
import { useQuery } from '@tanstack/vue-query'
import type { IGetTestProgress } from './getTestProgress.types'

export const getTestProgressKey = 'getTestProgress'

export const getTestProgress = async ({
  courseId,
  testId,
}: IGetTestProgress): Promise<ITestProgress> => {
  return API<APITestProgress>({
    url: `/api/v1/test-progress/course/${courseId}`,
    method: 'GET',
    params: {
      test_id: testId,
      course_id: courseId,
    },
  })
    .then(async ({ data }) => {
      const validate = await testProgressValidation.validate(data, { abortEarly: false })
      return testProgressConversation(validate)
    })
    .catch((error: AxiosError<IError> | ValidationError) => {
      if (error instanceof AxiosError) {
        throw new DetailsError('/test-progress/courseID', {
          status: error.response?.status,
          error: { errorID: error.response?.data.ErrorID, message: error.response?.data.Message },
        })
      }
      const validation = error.inner.map((error) => error.message)
      throw new DetailsError('/test-progress/courseID', { validation })
    })
}

export const useGetTestProgress = (args: IGetTestProgress) =>
  useQuery({
    queryKey: [getTestProgressKey, args],
    queryFn: () => getTestProgress(args),
  })
