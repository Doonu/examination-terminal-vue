import type { APITestProgress, ITestProgress } from '@/entities/test-progress'
import { testConversation } from '@/entities/test'

export const testProgressConversation = (progressTest: APITestProgress): ITestProgress => ({
  id: progressTest.id,
  testId: progressTest.test_id,
  status: progressTest.status,
  attemptDate: progressTest.attempt_date,
  countCurrentAnswer: progressTest.count_current_answer,
  participantId: progressTest.participant_id,
  deadlineDate: progressTest.deadline_date,
  timeLimit: progressTest.timelimit,
  test: testConversation(progressTest.test),
  resultTest: progressTest.result_test.map((p) => ({
    id: p.id,
    textQuestion: p.text_question,
    options: p.options,
    correctAnswer: p.correct_answer,
    studentAnswer: p.student_answer,
  })),
})
