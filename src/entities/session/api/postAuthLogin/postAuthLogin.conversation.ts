import type { APISession } from './postAuthLogin.types'
import type { ISession } from '@/entities/session'

export const postAuthLoginConversation = (session: APISession): ISession => ({
  accessToken: session.access_token,
  refreshToken: session.refresh_token,
})
