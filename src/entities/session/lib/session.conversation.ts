import type { APISession, ISession } from '@/entities/session'

export const sessionConversation = (session: APISession): ISession => ({
  accessToken: session.access_token,
  refreshToken: session.refresh_token,
})
