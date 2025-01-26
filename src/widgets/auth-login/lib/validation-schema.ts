import { object, string, ObjectSchema } from 'yup'
import type { IAuthLogin } from '@/entities/session'

export const validationSchema: ObjectSchema<IAuthLogin> = object({
  email: string().email('Введите корректный email').required('Email обязателен'),
  password: string().min(6, 'Пароль должен быть не менее 6 символов').required('Пароль обязателен'),
})
