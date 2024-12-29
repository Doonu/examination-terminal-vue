<script setup lang="ts">
defineProps({
  title: String,
  body: String,
})
</script>

<template>
  <div class="flex flex-col gap-2.5a border p-2">
    <h1 class="text-red-400">{{ title }}</h1>
    <div class="overflow-hidden text-ellipsis whitespace-nowrap">{{ body }}</div>
  </div>
</template>

<style scoped></style>
