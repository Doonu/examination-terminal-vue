import { array, ArraySchema, number, object, string } from 'yup'
import type { APICourse } from '@/entities/course'
import { getProfileValidation } from '@/entities/profile'
import { testValidation } from '@/entities/test'

export const getCourseListValidation: ArraySchema<APICourse[], object> = array(
  object({
    id: number().required(),
    name: string().required(),
    description: string().required(),
    teacher_id: number().required(),
    teacher: getProfileValidation,
    students: array(getProfileValidation).required(),
    tests: array(testValidation).required(),
  }),
).required()
