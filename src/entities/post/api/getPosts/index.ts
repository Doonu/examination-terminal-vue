import type { IPost } from '@/entities/post'
import { API } from '@/shared/config'
import { useQuery, type UseQueryReturnType } from '@tanstack/vue-query'
import type { IGetPostsParams } from './getPosts.types'
import { computed } from 'vue'

export const getPostsKey = 'getPosts'

const getPosts = async ({ title }: IGetPostsParams): Promise<IPost[]> => {
  return API({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    params: { title: title.value },
  }).then(({ data }) => {
    return data
  })
}

export const userGetPosts = ({ title }: IGetPostsParams): UseQueryReturnType<IPost[], unknown> => {
  return useQuery<IPost[]>({
    queryKey: computed(() => [getPostsKey, title.value, 1]),
    queryFn: () => getPosts({ title }),
  })
}
