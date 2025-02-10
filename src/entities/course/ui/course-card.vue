<script setup lang="ts">
import type { ICourse } from '@/entities/course'
import { RadialBarChart } from '@/shared/components'

defineProps<{
  course: ICourse
}>()
</script>

<template>
  <router-link :to="`/courses/${course.id}`">
    <div class="flex justify-space-between bg-secondaryBg p-[16px] rounded-[8px]">
      <div class="grid">
        <span>{{ course.name }}</span>
        <span class="text-accent">{{ course.description }}</span>
      </div>
      <radial-bar-chart />
    </div>
  </router-link>
</template>

<style scoped></style>
