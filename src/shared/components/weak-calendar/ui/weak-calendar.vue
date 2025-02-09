<script setup lang="ts">
import { ref, computed } from 'vue'

const today = new Date()
const offset = ref(0)

const props = defineProps<{
  selectedDate: Date
}>()

const emit = defineEmits(['update:selectedDate'])

const days = computed(() => {
  const weekDays = []
  const options: Intl.DateTimeFormatOptions = { weekday: 'short' }

  for (let i = 0; i < 7; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i + offset.value * 7)

    weekDays.push({
      name: date.toLocaleDateString('en-US', options),
      date: new Date(date.setHours(0, 0, 0, 0)),
    })
  }

  return weekDays
})

const selectDate = (date: Date) => {
  emit('update:selectedDate', date)
}
</script>

<template>
  <div class="flex items-center gap-4">
    <button @click="offset--" class="p-2 bg-gray-700 rounded-lg">←</button>
    <div class="flex gap-2">
      <div
        v-for="day in days"
        :key="day.date.getTime()"
        class="flex flex-col items-center justify-center w-12 h-16 rounded-lg cursor-pointer transition-all"
        :class="{
          'bg-yellow-400 text-black font-bold': day.date.getTime() === props.selectedDate.getTime(),
          'bg-gray-800 text-gray-300': day.date.getTime() !== props.selectedDate.getTime(),
        }"
        @click="selectDate(day.date)"
      >
        <span class="text-sm">{{ day.name }}</span>
        <span class="text-lg font-bold">{{ day.date.getDate() }}</span>
      </div>
    </div>

    <button @click="offset++" class="p-2 bg-gray-700 rounded-lg">→</button>
  </div>
</template>
