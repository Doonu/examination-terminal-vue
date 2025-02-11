import { number, object, type ObjectSchema, string } from 'yup'
import type { IUpdateProfile } from '@/entities/profile'

export const updateProfileValidation: ObjectSchema<IUpdateProfile> = object({
  firstName: string().min(3, 'Имя должно быть не менее 3 символов').required('Имя обязательно'),
  lastName: string()
    .min(3, 'Фамилия должно быть не менее 3 символов')
    .required('Фамилия обязательно'),
  age: number().required('Возраст обязателен'),
  gender: number<1 | 2>().required('Укажите пол'),
})
