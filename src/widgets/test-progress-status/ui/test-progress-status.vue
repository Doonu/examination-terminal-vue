<script setup lang="ts">
import { StartTest } from '@/features/start-test'
import NotStartedTest from '@/entities/test-progress/ui/not-started-test.vue'
import CompletedTest from '@/entities/test-progress/ui/completed-test.vue'
import { TakeTest } from '@/features/take-test'
import { useRoute } from 'vue-router'
import { useGetTestProgress } from '@/entities/test-progress'

const route = useRoute()
const params = route.params.id[0]
const courseId = route.fullPath.split('/')[2]

const { data } = useGetTestProgress({ courseId: courseId, testId: params })
</script>

<template>
  <start-test v-if="data?.status === 1" />
  <take-test v-if="data?.status === 2" />
  <completed-test v-if="data?.status === 3" />
  <not-started-test v-if="data?.status === 4" />
</template>

<style scoped></style>
