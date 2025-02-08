<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="grid bg-inherit max-w-[var(--max-desktop)] h-full">
    <div
      class="flex flex-col justify-center flex-1 h-full overflow-hidden max-w-[var(--max-desktop)]"
    >
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
