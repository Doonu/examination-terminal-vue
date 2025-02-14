<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useGetTestProgress } from '@/entities/test-progress'
const route = useRoute()
const params = route.params.id[0]
const courseId = route.fullPath.split('/')[2]

const { data } = useGetTestProgress({ courseId: courseId, testId: params })
</script>

<template>
  ffff
  <div>{{ data?.test.name }}</div>
</template>

<style scoped></style>
