import { array, number, object, type ObjectSchema, string } from 'yup'
import type { APITestProgress } from '@/entities/test-progress'
import { testValidation } from '@/entities/test'

export const testProgressValidation: ObjectSchema<APITestProgress> = object({
  test_id: number().defined(),
  status: number().defined(),
  attempt_date: number().defined().nullable(),
  count_current_answer: number().defined().nullable(),
  participant_id: number().defined(),
  deadline_date: number().defined(),
  timelimit: number().defined(),
  id: number().required(),
  test: testValidation,
  result_test: array(
    object({
      id: number().defined(),
      text_question: string().defined(),
      options: array().defined(),
      correct_answer: string().defined(),
      student_answer: string().defined().nullable(),
    }),
  ).required(),
}).required()
