import { array, boolean, number, object, type ObjectSchema, string } from 'yup'
import { getProfileValidation } from '@/entities/profile'
import type { APICourseInCourse, APITestInCourse } from '@/entities/course'

export const testValidation: ObjectSchema<APITestInCourse> = object({
  name: string().defined(),
  time_limit: number().defined(),
  id: number().defined(),
  creator_id: number().defined(),
  access_test: boolean().defined(),
  creator: getProfileValidation,
})

export const validationSchema: ObjectSchema<APICourseInCourse> = object({
  id: number().required(),
  name: string().required(),
  description: string().required(),
  teacher_id: number().required(),
  teacher: getProfileValidation,
  students: array(getProfileValidation).required(),
  tests: array(testValidation).required(),
})
