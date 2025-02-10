<script setup lang="ts">
import { CourseList } from '@/widgets/course-list'
import { CourseSearch } from '@/widgets/course-search'
</script>

<template>
  <div class="grid gap-[32px]">
    <course-search />
    <course-list />
  </div>
</template>

<style scoped></style>
