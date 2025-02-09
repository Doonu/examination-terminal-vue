import type { APIProfile, IProfile } from '@/entities/profile'
import type { APITest, ITest } from '@/entities/test'

export interface APITestProgress {
  test_id: number
  status: number
  attempt_date: number | null
  count_current_answer: number | null
  course_id: number
  participant_id: number
  deadline_date: number
  timelimit: number
  id: number
  participant: APIProfile
  test: APITest
}

export interface ITestProgress {
  id: number
  testId: number
  status: number
  attemptDate: number | null
  countCurrentAnswer: number | null
  courseId: number
  participantId: number
  deadlineDate: number
  timeLimit: number
  participant: IProfile
  test: ITest
}
