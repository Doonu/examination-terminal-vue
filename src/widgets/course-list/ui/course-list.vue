<script setup lang="ts">
import { useCourseSearch, useGetCourseList } from '@/entities/course'
import { storeToRefs } from 'pinia'

const course = useCourseSearch()
const { search } = storeToRefs(course)

const { data } = useGetCourseList(search)
</script>

<template>
  <div class="bg-primary py-4 px-6 rounded-[16px]">
    <div v-for="item in data" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped></style>
