<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/post">Post</RouterLink>
  </header>

  <RouterView />
</template>

<style scoped></style>
