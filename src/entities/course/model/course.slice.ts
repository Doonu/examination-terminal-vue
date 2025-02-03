import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCourseSearch = defineStore('searchCourse', () => {
  const search = ref<string>('')

  const setSearch = (value: string) => {
    console.log(value)
    search.value = value
    console.log(search.value)
  }

  return { search, setSearch }
})
