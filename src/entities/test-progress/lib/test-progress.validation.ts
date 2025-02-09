import { array, type ArraySchema, number, object } from 'yup'
import type { APITestProgress } from '@/entities/test-progress'
import { getProfileValidation } from '@/entities/profile'
import { testValidation } from '@/entities/test'

export const testProgressValidation: ArraySchema<APITestProgress[], object> = array(
  object({
    test_id: number().defined(),
    status: number().defined(),
    attempt_date: number().defined().nullable(),
    count_current_answer: number().defined().nullable(),
    course_id: number().defined(),
    participant_id: number().defined(),
    deadline_date: number().defined(),
    timelimit: number().defined(),
    id: number().required(),
    participant: getProfileValidation,
    test: testValidation,
  }).required(),
).required()
