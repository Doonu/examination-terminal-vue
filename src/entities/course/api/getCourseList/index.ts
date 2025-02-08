import { API, DetailsError, type IError } from '@/shared/api'
import { getCourseListValidation } from './getCourseList.validation'
import { getCourseListConversation } from './getCourseList.conversation'
import type { APICourse, ICourse } from '@/entities/course'
import { AxiosError } from 'axios'
import type { ValidationError } from 'yup'
import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'

export const getCourseListKey = 'getCourseList'

export const getCourseList = async (
  search: Ref<string>,
  sortBy: Ref<string>,
): Promise<ICourse[]> => {
  return API<APICourse[]>({
    url: '/api/v1/course/',
    method: 'GET',
    params: {
      search: search.value || null,
      sort_by: sortBy.value || null,
      direction: 0,
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

export const useGetCourseList = (search: Ref<string>, sortBy: Ref<string>) =>
  useQuery({
    queryKey: computed(() => [getCourseListKey, search.value, sortBy.value]),
    queryFn: () => getCourseList(search, sortBy),
  })
