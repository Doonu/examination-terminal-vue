<script setup lang="ts">
import type { ICourse } from '@/entities/course'

defineProps<{
  course: ICourse
}>()
</script>

<template>
  <div class="bg-secondaryBg p-[16px] rounded-[8px]">{{ course.name }}</div>
</template>

<style scoped></style>
