<script setup lang="ts">
import { useCounterStore } from '@/shared/stores/counter.ts'

const counterStore = useCounterStore()
</script>

<template>
  <p>Count: {{ counterStore.count }}</p>
  <p>Double Count: {{ counterStore.doubleCount }}</p>
  <button @click="counterStore.increment">Increment</button>
</template>
