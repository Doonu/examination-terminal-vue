<script setup lang="ts">
import { NavigationMenu } from '@/widgets/navigation-menu'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="grid h-max bg-inherit max-w-[var(--max-desktop)]">
    <div class="flex flex-col flex-1 h-full overflow-hidden max-w-[var(--max-desktop)]">
      <div class="flex">
        <navigation-menu />

        <div class="flex-1 align-content-start p-[32px]"><RouterView /></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
