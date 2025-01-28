import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'
import { useSession } from '@/entities/session'
import { refreshSession } from '@/entities/session/api/postAuthRefresh'

const API: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

const handlerRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { method, url, headers } = config
  const { accessToken } = useSession()

  if (!url?.startsWith('/api/v1/auth/')) {
    headers.Authorization = `Bearer ${accessToken}`
  }

  console.log(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`)

  return config
}

const handlerResponse = (response: AxiosResponse): AxiosResponse => {
  const { method, url } = response.config
  const { status } = response
  console.log(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`)

  return response
}

const handlerError = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { message } = error
    const { method, url } = error.config as AxiosRequestConfig
    const { status } = (error.response as AxiosResponse) ?? {}
    const { updateSession } = useSession()

    if (status === 401) {
      const { refreshToken, clearSession } = useSession()
      const isAuthRequire = !url?.startsWith('/api/v1/auth/')

      if (refreshToken && isAuthRequire) {
        refreshSession({ refreshToken }).then((data) => {
          updateSession(data)
        })
      } else {
        clearSession()
      }
    }

    console.log(`🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`)
  } else {
    console.log(`🚨 [API] | Error ${error.message}`)
  }

  return Promise.reject(error)
}

API.interceptors.request.use(handlerRequest, handlerError)
API.interceptors.response.use(handlerResponse, handlerError)

export default API
