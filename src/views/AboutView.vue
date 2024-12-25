<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const updateCount = (event: any) => {
  count.value = +event.target.value
}
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="increment">+</button>
  <input @input="updateCount" />
  <input v-model="count" />
</template>

<style></style>
