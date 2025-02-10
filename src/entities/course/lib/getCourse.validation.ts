import { array, number, object, type ObjectSchema, string } from 'yup'
import { getProfileValidation } from '@/entities/profile'
import type { APICourse } from '@/entities/course'
import { testValidation } from '@/entities/test'

export const getCourseValidation: ObjectSchema<APICourse> = object({
  id: number().required(),
  name: string().required(),
  description: string().required(),
  teacher_id: number().required(),
  teacher: getProfileValidation,
  students: array(getProfileValidation).required(),
  tests: array(testValidation).required(),
}).required()
