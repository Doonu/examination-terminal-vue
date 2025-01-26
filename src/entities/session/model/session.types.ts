export interface IAuthLogin {
  email: string
  password: string
}

export interface ISession {
  accessToken: string
  refreshToken: string
}
