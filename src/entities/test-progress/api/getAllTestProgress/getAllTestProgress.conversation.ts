import type { APITestProgress, ITestProgress } from '@/entities/test-progress'
import { testProgressConversation } from '../../lib/test-progress.conversation'

export const getAllTestProgressConversation = (
  progressTest: APITestProgress[],
): ITestProgress[] => {
  return progressTest.map((item) => testProgressConversation(item))
}
