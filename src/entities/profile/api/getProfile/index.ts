import { API } from '@/shared/api'
import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import type { APIProfile, IProfile } from '../../model/profile.types'
import { getProfileValidation } from './getProfile.validation'
import { getProfileConversation } from './getProfile.conversation'

export const getProfileKey = 'getProfile'

export const getProfile = async (): Promise<IProfile> => {
  return API<APIProfile>({
    url: '/api/v1/profile/me',
    method: 'GET',
  }).then(async ({ data }) => {
    const validate = await getProfileValidation.validate(data, { abortEarly: true })
    return getProfileConversation(validate)
  })
}

export const useGetProfile = () =>
  useQuery({
    queryKey: computed(() => [getProfileKey]),
    queryFn: getProfile,
  })
