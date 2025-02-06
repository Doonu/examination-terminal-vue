<script setup lang="ts">
import { useCourseSearch, useGetCourseList } from '@/entities/course'
import { storeToRefs } from 'pinia'
import CourseCard from '@/entities/course/ui/course-card.vue'

const course = useCourseSearch()
const { search } = storeToRefs(course)

const { data } = useGetCourseList(search)
</script>

<template>
  <div class="bg-primary grid gap-[32px] py-4 px-6 rounded-[16px]">
    <div class="flex justify-space-between">
      <div>Курсы</div>
      <div>Title</div>
    </div>
    <div class="grid gap-[16px]">
      <course-card v-for="item in data" :key="item.id" :course="item" />
    </div>
  </div>
</template>

<style scoped></style>
