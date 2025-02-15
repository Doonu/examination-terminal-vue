<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getTestProgressKey, useGetTestProgress } from '@/entities/test-progress'
import dayjs from 'dayjs'
import { useRoute } from 'vue-router'
import { usePostStartTest } from '@/entities/test-progress'
import { queryClient } from '@/shared/config'
import { initialValue } from '@/entities/test-progress'

const route = useRoute()
const params = route.params.id[0]
const courseId = route.fullPath.split('/')[2]

const { data: testProgress } = useGetTestProgress({ courseId: courseId, testId: params })
const { mutateAsync: startTest } = usePostStartTest({ testProgressId: testProgress.value?.id })

const timeLeft = ref(initialValue)

const time = dayjs.duration(testProgress.value?.test.timeLimit || 0, 'seconds')
const timeLimit = time.format('H ч mm м')

let timeInterval: number

const updateTime = () => {
  if (!testProgress.value?.deadlineDate) return
  const targetDate = testProgress.value.deadlineDate * 1000

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

const handlerStartTest = () => {
  startTest().then(() => {
    queryClient.refetchQueries({ queryKey: [getTestProgressKey] })
  })
}

onMounted(() => {
  updateTime()
  timeInterval = setInterval(updateTime, 1000)
})
</script>

<template>
  <div class="bg-primary grid gap-[32px] py-4 px-6 rounded-[16px]">
    <h1 class="text-3xl">Тест {{ testProgress?.test.name }}</h1>
    <div>
      Осталось до окончания теста:
      <span class="text-active"
        >{{ timeLeft.days }} д {{ timeLeft.hours }} ч {{ timeLeft.minutes }} м
        {{ timeLeft.seconds }} с
      </span>
    </div>

    <div>
      Время на выполнение теста: <span class="text-active">{{ timeLimit }}</span>
    </div>

    <div class="flex align-center justify-center">
      <v-btn color="active" @click="handlerStartTest">Начать тест</v-btn>
    </div>
  </div>
</template>

<style scoped></style>
