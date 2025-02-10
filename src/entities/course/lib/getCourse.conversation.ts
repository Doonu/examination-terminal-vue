import type { APICourse, ICourse } from '@/entities/course'
import { getProfileConversation } from '@/entities/profile'
import { testConversation } from '@/entities/test'

export const getCourseConversation = (course: APICourse): ICourse => ({
  id: course.id,
  name: course.name,
  description: course.description,
  teacherId: course.teacher_id,
  teacher: getProfileConversation(course.teacher),
  students: course.students.map((student) => getProfileConversation(student)),
  tests: course.tests.map((test) => testConversation(test)),
})
