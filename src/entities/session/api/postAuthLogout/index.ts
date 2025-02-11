import { useSession } from '@/entities/session'

export const postAuthLogout = () => {
  const { clearSession } = useSession()
  clearSession()
  window.location.reload()
}
