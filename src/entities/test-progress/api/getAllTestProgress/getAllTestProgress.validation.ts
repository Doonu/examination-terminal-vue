import { array, type ArraySchema } from 'yup'
import { testProgressValidation } from '../../lib/test-progress.validation'
import type { APITestProgress } from '@/entities/test-progress'

export const getAllTestProgressValidation: ArraySchema<APITestProgress[], object> =
  array(testProgressValidation).required()
