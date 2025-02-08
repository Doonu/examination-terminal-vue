import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCourseSearch = defineStore('searchCourse', () => {
  const search = ref<string>('')
  const sortBy = ref<string>('name')

  return { search, sortBy }
})
