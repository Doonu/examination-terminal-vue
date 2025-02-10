<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useGetCourse } from '@/entities/course'

const route = useRoute()
const courseId = route.params.id

const { data: course } = useGetCourse(courseId.toString())
</script>

<template>
  <div class="bg-secondaryBg rounded-[8px] p-[16px]">
    <div class="grid">
      <span>{{ course?.name }}</span>
      <span>{{ course?.description }}</span>
    </div>
  </div>
</template>

<style scoped></style>
