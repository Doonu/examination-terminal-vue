import type { APIProfile, IProfile } from '@/entities/profile'

export interface APICourse {
  id: number
  name: string
  description: string
  teacher_id: number
  teacher: APIProfile
  students: APIProfile[]
}

export interface ICourse {
  id: number
  name: string
  description: string
  teacherId: number
  teacher: IProfile
  students: IProfile[]
}
