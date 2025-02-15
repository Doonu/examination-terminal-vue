import { getProfileConversation } from '@/entities/profile'
import type {
  APICourseInCourse,
  APITestInCourse,
  ICourseInCourse,
  ITestInCourse,
} from '@/entities/course'

export const testConversation = (test: APITestInCourse): ITestInCourse => ({
  id: test.id,
  name: test.name,
  timeLimit: test.time_limit,
  creatorId: test.creator_id,
  accessTest: test.access_test,
  creator: getProfileConversation(test.creator),
})

export const getCourseItemConversation = (course: APICourseInCourse): ICourseInCourse => ({
  id: course.id,
  name: course.name,
  description: course.description,
  teacherId: course.teacher_id,
  teacher: getProfileConversation(course.teacher),
  students: course.students.map((student) => getProfileConversation(student)),
  tests: course.tests.map((test) => testConversation(test)),
})
