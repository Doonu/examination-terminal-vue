<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useGetCourse } from '@/entities/course'
import { TestCourseCard } from '@/entities/test'

const route = useRoute()
const courseId = route.params.id

const { data: course } = useGetCourse(courseId.toString())
</script>

<template>
  <div class="grid grid-cols-[1fr_320px] gap-5 items-start">
    <div class="grid bg-secondaryBg rounded-[8px] p-[16px]">
      <div class="grid pb-[20px]">
        <span class="text-2xl pb-[20px]">{{ course?.name }}</span>
        <span>{{ course?.description }}</span>
      </div>

      <div class="text-xl pb-[20px] pt-[20px]">Тесты курса</div>

      <div class="grid grid-cols-[1fr_repeat(1,1fr)] gap-[16px]">
        <test-course-card
          v-for="item in course?.tests"
          :key="item.id"
          :test="item"
          :course-id="+courseId"
        />
      </div>
    </div>
    <div class="bg-secondaryBg rounded-[8px] p-[16px] flex flex-col gap-[20px]">
      <div>Преподаватель курса</div>
      <div>
        <div>Имя: {{ course?.teacher.firstName || 'не указано' }}</div>
        <div>Фамилия: {{ course?.teacher.lastName || 'не указано' }}</div>
        <div>Почта: {{ course?.teacher.email || 'не указано' }}</div>
      </div>
      <v-btn color="active">Написать преподавателю</v-btn>
    </div>
  </div>
</template>

<style scoped></style>
