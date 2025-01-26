import { number, object, string } from 'yup'

export const validationSchema = object({
  email: string().email('Введите корректный email').required('Email обязателен'),
  roleId: number().required('Роль обязательна'),
  password: string().min(6, 'Пароль должен быть не менее 6 символов').required('Пароль обязателен'),
})
