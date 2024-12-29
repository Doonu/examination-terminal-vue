import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostFilter = defineStore('filterStore', () => {
  const title = ref<null | string>(null)
  const choiceFilter = (valueFilter: string | null) => {
    title.value = valueFilter
  }

  return { title, choiceFilter }
})
