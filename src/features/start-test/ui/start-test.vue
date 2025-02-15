<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getTestProgressKey, useGetTestProgress } from '@/entities/test-progress'
import dayjs from 'dayjs'
import { useRoute } from 'vue-router'
import { usePostStartTest } from '@/entities/test-progress'
import { queryClient } from '@/shared/config'
import { initialValue, updateTime } from '../lib/time'

const route = useRoute()
const params = route.params.id[0]
const courseId = route.fullPath.split('/')[2]

const { data: testProgress } = useGetTestProgress({ courseId: courseId, testId: params })
const { mutateAsync: startTest } = usePostStartTest({ testProgressId: testProgress.value?.id })

const timeLeft = ref(initialValue)

const time = dayjs.duration(testProgress.value?.test.timeLimit || 0, 'seconds')
const timeLimit = time.format('H ч mm м')

let timeInterval: number

const handlerStartTest = () => {
  startTest().then(() => {
    queryClient.refetchQueries({ queryKey: [getTestProgressKey] })
  })
}

onMounted(() => {
  updateTime(timeLeft, timeInterval, testProgress.value?.deadlineDate)
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
