import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTestProgressStore = defineStore('dateStore', () => {
  const selectedDate = ref<Date>(new Date(new Date().setHours(0, 0, 0, 0)))

  const setSelectedDate = (date: Date) => {
    selectedDate.value = new Date(date.setHours(0, 0, 0, 0))
  }

  const selectedDateTimestamp = computed(() => Math.floor(selectedDate.value.getTime() / 1000))

  return { selectedDate, setSelectedDate, selectedDateTimestamp }
})
