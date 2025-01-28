import { API } from '@/shared/api'
import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'

export const getProfileKey = 'getProfile'

export const getProfile = async () => {
  return API({
    url: '/api/v1/profile/me',
    method: 'GET',
  }).then(async ({ data }) => data)
}

export const useGetProfile = () =>
  useQuery({
    queryKey: computed(() => [getProfileKey]),
    queryFn: getProfile,
  })
