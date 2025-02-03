import type { APICourse, ICourse } from '../../model/course.types'
import { getProfileConversation } from '@/entities/profile'

export const getCourseListConversation = (courses: APICourse[]): ICourse[] =>
  courses.map((course) => ({
    id: course.id,
    name: course.name,
    description: course.description,
    teacherId: course.teacher_id,
    teacher: getProfileConversation(course.teacher),
    students: course.students.map((student) => getProfileConversation(student)),
  }))
