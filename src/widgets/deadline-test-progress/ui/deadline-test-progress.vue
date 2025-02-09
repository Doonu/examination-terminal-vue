<script setup lang="ts">
import { WeakCalendar } from '@/shared/components'
import { useGetAllTestProgress, useTestProgressStore } from '@/entities/test-progress'
import { storeToRefs } from 'pinia'
import dayjs from 'dayjs'

const testProgressStore = useTestProgressStore()
const { selectedDateTimestamp } = storeToRefs(testProgressStore)

const { data } = useGetAllTestProgress(selectedDateTimestamp)

const deadlineTime = dayjs().format('MM DD HH:mm')
</script>

<template>
  <div class="bg-primary grid gap-[32px] py-4 px-6 rounded-[16px]">
    <div>
      <div class="text-2xl">Сроки</div>
    </div>
    <div>
      <weak-calendar
        :selected-date="testProgressStore.selectedDate"
        @update:selected-date="testProgressStore.setSelectedDate"
      />
    </div>

    <div v-for="item in data" :key="item.id" class="bg-secondaryBg p-[16px] rounded-[8px]">
      <div>
        {{ item.test.name }}
      </div>
      <div>{{ deadlineTime }}</div>
    </div>
  </div>
</template>

<style scoped></style>
