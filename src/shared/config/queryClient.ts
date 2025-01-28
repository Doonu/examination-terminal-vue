import { QueryClient } from '@tanstack/vue-query'

export const cacheTime = 60_000 * 5

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: cacheTime,
      gcTime: cacheTime,
      retry: 0,
      refetchOnMount: false,
    },
  },
})
