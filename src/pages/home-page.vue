<script setup lang="ts">
import { CourseSearch } from '@/widgets/course-search'
import { CourseList } from '@/widgets/course-list'
</script>

<template>
  <div class="grid gap-[32px]">
    <course-search />
    <div class="grid grid-cols-[1fr_440px] gap-[20px]">
      <course-list />
      <div>widget</div>
    </div>
  </div>
</template>
