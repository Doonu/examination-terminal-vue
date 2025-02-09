import type { APIProfile, IProfile } from '@/entities/profile'

export interface APITest {
  name: string
  time_limit: number
  id: number
  creator_id: number
  creator: APIProfile
}

export interface ITest {
  name: string
  timeLimit: number
  id: number
  creatorId: number
  creator: IProfile
}
