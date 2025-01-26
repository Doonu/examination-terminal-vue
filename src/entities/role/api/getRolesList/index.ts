import type { IRole } from '@/entities/role'
import { API } from '@/shared/config'
import { useQuery, type UseQueryReturnType } from '@tanstack/vue-query'
import { computed } from 'vue'

export const getRolesListKey = 'getRolesList'

const getRoleList = async (): Promise<IRole[]> => {
  return API<IRole[]>({
    url: '/api/v1/role/',
    method: 'GET',
  }).then(({ data }) => {
    return data
  })
}

export const useGetRolesList = (): UseQueryReturnType<IRole[], unknown> =>
  useQuery<IRole[]>({
    queryKey: computed(() => [getRolesListKey]),
    queryFn: getRoleList,
  })
