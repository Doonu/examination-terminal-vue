<script setup lang="ts">
import { useGetProfile } from '@/entities/profile'
import dayjs from 'dayjs'
import { getGreeting } from '@/entities/date'
import { useCourseSearch } from '@/entities/course'
import debounce from 'lodash/debounce'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

const { data } = useGetProfile()
const greeting = getGreeting()

const currentDateNow = dayjs().format('MMMM DD, YYYY')
const weekDay = dayjs().format('dddd')

const course = useCourseSearch()
const { search } = storeToRefs(course)

const localSearch = ref(search.value)

const updateSearchDebounced = debounce((val: string) => {
  search.value = val
}, 500)

watch(localSearch, (newVal) => {
  updateSearchDebounced(newVal)
})
</script>

<template>
  <div class="flex align-center gap-[15px] bg-primary py-4 px-6 rounded-[16px]">
    <div>
      <div class="text-accent">{{ greeting }},</div>
      <div>{{ data?.email }}</div>
    </div>
    <v-text-field
      v-model="localSearch"
      variant="solo-filled"
      prepend-inner-icon="mdi-magnify"
      class="rounded-[8px]"
      outlined
      hide-details
      placeholder="Поиск курса"
    />
    <div class="flex flex-col align-center justify-space-between h-full">
      <div class="text-accent">{{ currentDateNow }}</div>
      <div class="first-letter:uppercase">{{ weekDay }}</div>
    </div>
  </div>
</template>

<style scoped></style>
