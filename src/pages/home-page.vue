<script setup lang="ts">
import { useGetProfile } from '@/entities/profile'

const { data } = useGetProfile()
</script>

<template>
  <div>{{ data.id }}</div>
</template>
