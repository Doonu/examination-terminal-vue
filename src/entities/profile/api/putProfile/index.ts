import { API } from '@/shared/api'
import { useMutation } from '@tanstack/vue-query'
import type { IUpdateProfile } from '@/entities/profile'

export const putProfileKey = 'putProfile'

export const putProfile = async ({
  firstName,
  lastName,
  age,
  gender,
}: IUpdateProfile): Promise<void> => {
  return API({
    url: '/api/v1/profile/',
    method: 'PATCH',
    data: {
      first_name: firstName,
      last_name: lastName,
      age,
      gender,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(({ data }) => data)
}

export const usePutProfile = () =>
  useMutation({
    mutationKey: [putProfileKey],
    mutationFn: (fields: IUpdateProfile) => putProfile(fields),
  })
