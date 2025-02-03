import type { IRole } from '@/entities/role'

export interface APIProfile {
  id: number
  email: string
  first_name: string | null
  last_name: string | null
  age: number | null
  gender: 1 | 2 | null // 1 - жен, 2 - муж
  role: IRole
}

export interface IProfile {
  id: number
  email: string
  firstName: string | null
  lastName: string | null
  age: number | null
  gender: 1 | 2 | null
  role: IRole
}
