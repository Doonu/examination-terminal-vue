<script setup lang="ts">
import type { ITest } from '@/entities/test'
import dayjs from 'dayjs'

const props = defineProps<{ test: ITest; courseId: number }>()

const time = dayjs.duration(props.test.timeLimit, 'seconds')
const timeLimit = time.format('H час mm минут')
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
      <v-btn :to="`/courses/${courseId}/progress-test/${props.test.id}`" color="active"
        >Перейти в тест</v-btn
      >
    </div>
  </div>
</template>

<style scoped></style>
