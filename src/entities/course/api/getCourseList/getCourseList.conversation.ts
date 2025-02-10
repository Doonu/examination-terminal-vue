import type { APICourse, ICourse } from '@/entities/course'
import { getCourseConversation } from '@/entities/course'

export const getCourseListConversation = (courses: APICourse[]): ICourse[] =>
  courses.map((course) => getCourseConversation(course))
