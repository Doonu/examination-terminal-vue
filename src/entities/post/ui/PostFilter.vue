<script setup lang="ts">
import { usePostFilter } from '@/entities/post'

const filter = usePostFilter()

const suntHandlerClick = () => {
  filter.choiceFilter('qui est esse')
}

const quiHandlerClick = () => {
  filter.choiceFilter('eum et est occaecati')
}

const clearHandler = () => {
  filter.choiceFilter(null)
}
</script>

<template>
  <div class="flex gap-2.5 p-10">
    <button @click="suntHandlerClick" class="border-2 p-2">qui est esse</button>
    <button @click="quiHandlerClick" class="border-2 p-2">eum et est occaecati</button>
    <button @click="clearHandler" class="border-2 p-2">Сброс</button>
  </div>
</template>
