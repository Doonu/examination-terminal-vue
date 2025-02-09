<script setup lang="ts">
import { CourseSearch } from '@/widgets/course-search'
import { CourseList } from '@/widgets/course-list'
import { DeadlineTestProgress } from '@/widgets/deadline-test-progress'
</script>

<template>
  <div class="grid gap-[32px]">
    <course-search />
    <div class="grid grid-cols-[1fr_520px] gap-5 items-start">
      <course-list />
      <deadline-test-progress />
    </div>
  </div>
</template>
