<script setup lang="ts">
import { useCourseSearch, useGetCourseList } from '@/entities/course'
import { storeToRefs } from 'pinia'
import CourseCard from '@/entities/course/ui/course-card.vue'

const course = useCourseSearch()
const { search, sortBy } = storeToRefs(course)

const { data, isError } = useGetCourseList(search, sortBy)

const title = isError ? 'Что-то пошло не так' : 'У вас нет ни одного курса'
</script>

<template>
  <div class="bg-primary grid gap-[32px] py-4 px-6 rounded-[16px]">
    <div class="flex justify-space-between">
      <div class="text-2xl">Мои Курсы</div>
    </div>
    <div class="grid gap-[16px]">
      <course-card v-for="item in data" :key="item.id" :course="item" />
      <v-empty-state
        v-show="!data?.length || isError"
        icon="mdi-magnify"
        :title="title"
      ></v-empty-state>
    </div>
  </div>
</template>

<style scoped></style>
