export interface IAuthLogin {
  email: string
  password: string
}

export interface IAuthRegister extends IAuthLogin {
  roleId: number
}

export interface ISession {
  accessToken: string
  refreshToken: string
}
