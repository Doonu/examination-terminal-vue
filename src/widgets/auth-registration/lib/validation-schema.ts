import { number, object, type ObjectSchema, string } from 'yup'
import type { IAuthRegister } from '@/entities/session'

export const validationSchema: ObjectSchema<IAuthRegister> = object({
  email: string().email('Введите корректный email').required('Email обязателен'),
  roleId: number().required('Роль обязательна'),
  password: string().min(6, 'Пароль должен быть не менее 6 символов').required('Пароль обязателен'),
})
