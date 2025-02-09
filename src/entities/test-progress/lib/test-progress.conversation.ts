import type { APITestProgress, ITestProgress } from '@/entities/test-progress'
import { getProfileConversation } from '@/entities/profile'
import { testConversation } from '@/entities/test'

export const testProgressConversation = (progressTest: APITestProgress[]): ITestProgress[] => {
  return progressTest.map((item) => ({
    id: item.id,
    testId: item.test_id,
    status: item.status,
    attemptDate: item.attempt_date,
    countCurrentAnswer: item.count_current_answer,
    courseId: item.course_id,
    participantId: item.participant_id,
    deadlineDate: item.deadline_date,
    timeLimit: item.timelimit,
    participant: getProfileConversation(item.participant),
    test: testConversation(item.test),
  }))
}
