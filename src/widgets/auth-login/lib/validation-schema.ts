import { object, string } from 'yup'

export const validationSchema = object({
  email: string().email('Введите корректный email').required('Email обязателен'),
  password: string().min(6, 'Пароль должен быть не менее 6 символов').required('Пароль обязателен'),
})
