import { number, object, type ObjectSchema, string } from 'yup'
import type { APITest } from '@/entities/test'
import { getProfileValidation } from '@/entities/profile'

export const testValidation: ObjectSchema<APITest> = object({
  name: string().defined(),
  time_limit: number().defined(),
  id: number().defined(),
  creator_id: number().defined(),
  creator: getProfileValidation,
})
