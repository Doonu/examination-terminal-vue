import { API, DetailsError, type IError } from '@/shared/api'
import { computed, type Ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import type { APITestProgress, ITestProgress } from '@/entities/test-progress'
import { testProgressValidation } from '@/entities/test-progress/lib/test-progress.validation.ts'
import { AxiosError } from 'axios'
import type { ValidationError } from 'yup'
import { testProgressConversation } from '../../lib/test-progress.conversation'

const getAllTestProgressKey = 'getAllTestProgress'

export const getAllTestProgress = async (filterDate: Ref<number>): Promise<ITestProgress[]> => {
  return API<APITestProgress[]>({
    url: '/api/v1/test-progress/',
    method: 'GET',
    params: {
      filter_date: filterDate.value,
    },
  })
    .then(async ({ data }) => {
      const validate = await testProgressValidation.validate(data, { abortEarly: false })
      return testProgressConversation(validate)
    })
    .catch((error: AxiosError<IError> | ValidationError) => {
      if (error instanceof AxiosError) {
        throw new DetailsError('/test-progress/getAll', {
          status: error.response?.status,
          error: { errorID: error.response?.data.ErrorID, message: error.response?.data.Message },
        })
      }
      const validation = error.inner.map((error) => error.message)
      throw new DetailsError('/test-progress/getAll', { validation })
    })
}

export const useGetAllTestProgress = (filterData: Ref<number>) =>
  useQuery({
    queryKey: computed(() => [getAllTestProgressKey, filterData.value]),
    queryFn: () => getAllTestProgress(filterData),
  })
