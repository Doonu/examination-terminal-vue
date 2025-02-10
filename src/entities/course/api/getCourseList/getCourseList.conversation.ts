import type { APICourse, ICourse } from '../../model/course.types'
import { getCourseConversation } from '../../lib/getCourse.conversation'

export const getCourseListConversation = (courses: APICourse[]): ICourse[] =>
  courses.map((course) => getCourseConversation(course))
