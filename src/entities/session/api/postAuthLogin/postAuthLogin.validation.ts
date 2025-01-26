import { object, type ObjectSchema, string } from 'yup'
import type { APISession } from '@/entities/session'

export const validationSchema: ObjectSchema<APISession> = object({
  access_token: string().required(),
  refresh_token: string().required(),
})
