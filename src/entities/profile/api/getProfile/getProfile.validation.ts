import { number, object, type ObjectSchema, string } from 'yup'
import type { APIProfile } from '../../model/profile.types'

export const getProfileValidation: ObjectSchema<APIProfile> = object({
  id: number().defined(),
  email: string().defined(),
  first_name: string().defined().nullable(),
  last_name: string().defined().nullable(),
  age: number().defined().nullable(),
  gender: number<1 | 2>().defined().nullable(),
  role: object({
    id: number().defined(),
    name: string().defined(),
  }),
})
