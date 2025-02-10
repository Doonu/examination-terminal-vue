import type { APIProfile, IProfile } from '@/entities/profile'
import type { APITest, ITest } from '@/entities/test'

export interface APICourse {
  id: number
  name: string
  description: string
  teacher_id: number
  teacher: APIProfile
  students: APIProfile[]
  tests: APITest[]
}

export interface ICourse {
  id: number
  name: string
  description: string
  teacherId: number
  teacher: IProfile
  students: IProfile[]
  tests: ITest[]
}
