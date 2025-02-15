<script setup lang="ts">
import dayjs from 'dayjs'
import type { ITestInCourse } from '@/entities/course'

const props = defineProps<{ test: ITestInCourse; courseId: number }>()

const time = dayjs.duration(props.test.timeLimit, 'seconds')
const timeLimit = time.format('H час mm минут')

const titleBtn = props.test.accessTest ? 'Перейти к тесту' : 'На данный момент тест недоступен'
</script>

<template>
  <div
    class="flex justify-space-between align-center border-secondary border-[1px] p-[8px] rounded-[8px]"
  >
    <div class="grid">
      <div>Название теста: {{ props.test.name }}</div>
      <div>Время: {{ timeLimit }}</div>
    </div>
    <div>
      <v-btn
        :disabled="!test.accessTest"
        :to="`/courses/${courseId}/progress-test/${props.test.id}`"
        color="active"
        :title="titleBtn"
        >Перейти в тест</v-btn
      >
    </div>
  </div>
</template>

<style scoped></style>
