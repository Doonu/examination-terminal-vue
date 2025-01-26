<script setup lang="ts">
defineProps({
  name: String,
})
</script>

<template>
  <div class="flex flex-col gap-2.5a border p-2">
    <h1 class="text-red-400">{{ name }}</h1>
  </div>
</template>

<style scoped></style>
