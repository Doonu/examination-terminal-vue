import { array, ArraySchema } from 'yup'
import type { APICourse } from '@/entities/course'
import { getCourseValidation } from '@/entities/course'

export const getCourseListValidation: ArraySchema<APICourse[], object> =
  array(getCourseValidation).required()
