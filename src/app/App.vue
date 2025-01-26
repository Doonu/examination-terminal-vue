<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/auth">Auth</RouterLink>
  </header>

  <RouterView />
</template>

<style scoped></style>
