<script setup lang="ts">
import {
  getTestProgressKey,
  type ITestProgress,
  useGetTestProgress,
  usePostCompleteTest,
} from '@/entities/test-progress'
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import { initialValue } from '@/entities/test-progress'
import { queryClient } from '@/shared/config'

const route = useRoute()
const params = route.params.id[0]
const courseId = route.fullPath.split('/')[2]

const { data: testProgress } = useGetTestProgress({ courseId: courseId, testId: params })
const { mutateAsync: endTest } = usePostCompleteTest()

const timeLeft = ref(initialValue)
const answer = ref<ITestProgress['resultTest']>(testProgress.value?.resultTest || [])

let timeInterval: number

const updateTime = () => {
  if (!testProgress.value?.attemptDate) return
  const targetDate = testProgress.value.attemptDate * 1000 + testProgress.value.timeLimit * 1000

  const now = +new Date()
  const diff = targetDate - now

  if (diff < 0) {
    clearInterval(timeInterval)
    timeLeft.value = initialValue
    return
  }

  timeLeft.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const handlerUpdateAnswer = (questionId: number, value: string) => {
  const question = answer.value.find((q) => q.id === questionId)
  if (question) {
    question.studentAnswer = value
  }
}

const handlerEndTest = () => {
  endTest({ testProgressId: testProgress.value?.id, answers: answer }).then(() => {
    queryClient.refetchQueries({ queryKey: [getTestProgressKey] })
  })
}

watch(
  () => testProgress.value,
  (newValue) => {
    if (newValue) {
      answer.value = newValue.resultTest.map((q) => ({
        ...q,
        studentAnswer: q.studentAnswer || null,
      }))
    }
  },
  { immediate: true },
)

onMounted(() => {
  updateTime()
  timeInterval = setInterval(updateTime, 1000)
})
</script>

<template>
  <div class="bg-primary grid gap-[32px] py-4 px-6 rounded-[16px]">
    <h1 class="text-3xl">Тест {{ testProgress?.test.name }}</h1>

    <div>
      Осталось до окончания попытки:
      <span class="text-active">
        {{ timeLeft.hours }} ч {{ timeLeft.minutes }} м {{ timeLeft.seconds }} с
      </span>
    </div>

    <div v-for="testInfo in answer" :key="testInfo.id">
      <div class="text-xl">Вопрос: {{ testInfo.textQuestion }}</div>
      <v-radio-group v-model="testInfo.studentAnswer">
        <v-radio
          v-for="option in testInfo.options"
          :key="option"
          :label="option"
          :value="option"
          @click="handlerUpdateAnswer(testInfo.id, option)"
        />
      </v-radio-group>
    </div>

    <v-btn @click="handlerEndTest" color="active">Завершить тест</v-btn>
  </div>
</template>

<style scoped></style>
