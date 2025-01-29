import type { ObjectSchema } from 'yup'
import type { APISession } from '@/entities/session'
import { object, string } from 'yup'

export const sessionValidation: ObjectSchema<APISession> = object({
  access_token: string().required(),
  refresh_token: string().required(),
})
