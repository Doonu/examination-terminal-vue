<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="grid h-max p-4 bg-inherit max-w-[var(--max-desktop)] sm:px-[10px]">
    <div class="flex flex-col flex-1 h-full overflow-hidden max-w-[var(--max-desktop)]">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
