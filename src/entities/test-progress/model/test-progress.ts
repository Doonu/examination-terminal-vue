import type { APITest, ITest } from '@/entities/test'

export interface APITestProgress {
  test_id: number
  status: number
  attempt_date: number | null
  count_current_answer: number | null
  participant_id: number
  deadline_date: number
  timelimit: number
  id: number
  test: APITest
  result_test: {
    id: number
    text_question: string
    options: string[]
    correct_answer: string
    student_answer: string | null
  }[]
}

export interface ITestProgress {
  id: number
  testId: number
  status: number
  attemptDate: number | null
  countCurrentAnswer: number | null
  participantId: number
  deadlineDate: number
  timeLimit: number
  test: ITest
  resultTest: {
    id: number
    textQuestion: string
    options: string[]
    correctAnswer: string
    studentAnswer: string | null
  }[]
}
