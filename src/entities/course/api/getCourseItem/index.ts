import { API, DetailsError, type IError } from '@/shared/api'
import { AxiosError } from 'axios'
import type { ValidationError } from 'yup'
import { useQuery } from '@tanstack/vue-query'
import { validationSchema } from './getCourseItem.validation'
import type { APICourseInCourse, ICourseInCourse } from '@/entities/course'
import { getCourseItemConversation } from './getCourseItem.conversation'

export const getCourseItemKey = 'getCourseItem'

export const getCourseItem = async (courseId: string): Promise<ICourseInCourse> => {
  return API<APICourseInCourse>({
    url: `/api/v1/course/${courseId}`,
    method: 'GET',
  })
    .then(async ({ data }) => {
      const validate = await validationSchema.validate(data, { abortEarly: false })
      return getCourseItemConversation(validate)
    })
    .catch((error: AxiosError<IError> | ValidationError) => {
      if (error instanceof AxiosError) {
        throw new DetailsError('/course/item', {
          status: error.response?.status,
          error: { errorID: error.response?.data.ErrorID, message: error.response?.data.Message },
        })
      }
      const validation = error.inner.map((error) => error.message)
      throw new DetailsError('/course/item', { validation })
    })
}

export const useGetCourse = (courseId: string) =>
  useQuery({
    queryKey: [getCourseItemKey, courseId],
    queryFn: () => getCourseItem(courseId),
  })
