<script setup lang="ts">
import { CourseSearch } from '@/widgets/course-search'
import { CourseList } from '@/widgets/course-list'
</script>

<template>
  <div class="grid gap-[32px]">
    <course-search />
    <course-list />
  </div>
</template>
