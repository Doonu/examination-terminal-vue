import type { APITest, ITest } from '@/entities/test'
import { getProfileConversation } from '@/entities/profile'

export const testConversation = (test: APITest): ITest => ({
  id: test.id,
  name: test.name,
  timeLimit: test.time_limit,
  creatorId: test.creator_id,
  creator: getProfileConversation(test.creator),
})
