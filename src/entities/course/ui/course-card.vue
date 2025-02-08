<script setup lang="ts">
import type { ICourse } from '@/entities/course'
import { RadialBarChart } from '@/shared/components'

defineProps<{
  course: ICourse
}>()
</script>

<template>
  <div class="flex justify-space-between bg-secondaryBg p-[16px] rounded-[8px]">
    <div class="grid">
      <span>{{ course.name }}</span>
      <span class="text-accent">{{ course.description }}</span>
    </div>
    <radial-bar-chart />
  </div>
</template>

<style scoped></style>
