import { API, DetailsError, type IError } from '@/shared/api'
import { getCourseListValidation } from './getCourseList.validation'
import { getCourseListConversation } from './getCourseList.conversation'
import type { APICourse, ICourse } from '../../model/course.types'
import { AxiosError } from 'axios'
import type { ValidationError } from 'yup'
import { useQuery } from '@tanstack/vue-query'
import { computed, type Ref } from 'vue'

export const getCourseListKey = 'getCourseList'

export const getCourseList = async (search: Ref<string>): Promise<ICourse[]> => {
  return API<APICourse[]>({
    url: '/api/v1/course/',
    method: 'GET',
    params: {
      search: search.value || null,
    },
  })
    .then(async ({ data }) => {
      const validate = await getCourseListValidation.validate(data, { abortEarly: false })
      return getCourseListConversation(validate)
    })
    .catch((error: AxiosError<IError> | ValidationError) => {
      if (error instanceof AxiosError) {
        throw new DetailsError('/course/list', {
          status: error.response?.status,
          error: { errorID: error.response?.data.ErrorID, message: error.response?.data.Message },
        })
      }
      const validation = error.inner.map((error) => error.message)
      throw new DetailsError('/course/list', { validation })
    })
}

export const useGetCourseList = (search: Ref<string>) =>
  useQuery({
    queryKey: computed(() => [getCourseListKey, search.value]),
    queryFn: () => getCourseList(search),
  })
