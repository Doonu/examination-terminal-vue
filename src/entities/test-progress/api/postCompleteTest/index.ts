import type { ITestProgress } from '@/entities/test-progress'
import { API, DetailsError, type IError } from '@/shared/api'
import { AxiosError } from 'axios'
import type { ValidationError } from 'yup'
import { useMutation } from '@tanstack/vue-query'
import type { Ref } from 'vue'

export const postCompleteTestKey = 'postCompleteTest'

interface PostCompleteTestProps {
  testProgressId?: number
  answers: Ref<ITestProgress['resultTest']>
}

export const postCompleteTest = async ({ testProgressId, answers }: PostCompleteTestProps) => {
  const answerResult = answers.value.map((a) => ({
    text_question: a.textQuestion,
    options: a.options,
    correct_answer: a.correctAnswer,
    student_answer: a.studentAnswer,
  }))

  return API({
    url: `/api/v1/test-progress/${testProgressId}/completion-test`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: answerResult,
  })
    .then(({ data }) => data)
    .catch((error: AxiosError<IError> | ValidationError) => {
      if (error instanceof AxiosError) {
        throw new DetailsError('/test-progress/complete-test', {
          status: error.response?.status,
          error: { errorID: error.response?.data.ErrorID, message: error.response?.data.Message },
        })
      }
      const validation = error.inner.map((error) => error.message)
      throw new DetailsError('/test-progress/complete-test', { validation })
    })
}

export const usePostCompleteTest = () =>
  useMutation({
    mutationKey: [postCompleteTestKey],
    mutationFn: (args: PostCompleteTestProps) => postCompleteTest(args),
  })
