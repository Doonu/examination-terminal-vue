import { useSession } from '@/entities/session'

export const postAuthLogoutKey = 'postAuthLogout'

export const postAuthLogout = () => {
  const { clearSession } = useSession()
  clearSession()
  window.location.reload()
}
