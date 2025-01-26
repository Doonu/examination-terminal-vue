export interface IAuthLogin {
  email: string
  password: string
}

export interface IAuthRegister extends IAuthLogin {
  roleId: number
}

export interface APISession {
  access_token: string
  refresh_token: string
}

export interface ISession {
  accessToken: string
  refreshToken: string
}
