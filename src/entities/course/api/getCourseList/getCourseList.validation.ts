import { array, ArraySchema, number, object, string } from 'yup'
import type { APICourse } from '@/entities/course'
import { getProfileValidation } from '@/entities/profile'

export const getCourseListValidation: ArraySchema<APICourse[], object> = array(
  object({
    id: number().required(),
    name: string().required(),
    description: string().required(),
    teacher_id: number().required(),
    teacher: getProfileValidation,
    students: array(getProfileValidation).required(),
  }).required(),
).required()
