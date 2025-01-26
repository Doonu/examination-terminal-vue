<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  console.log(theme.global.current.value)
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-switch @change="toggleTheme">toggle theme</v-switch>
</template>

<style scoped></style>
