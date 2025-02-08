<script setup lang="ts">
import { listNavigationMenu } from '../lib/listNavigationMenu'
import { postAuthLogout } from '@/entities/session'

const handlerLogout = () => {
  postAuthLogout()
}
</script>

<template class="h-full">
  <div
    class="h-screen grid auto-rows-max gap-[15px] justify-center bg-primary pt-[150px] pl-[24px] pr-[24px]"
  >
    <div v-for="itemMenu in listNavigationMenu" :key="itemMenu.name">
      <v-list-item
        class="py-[12px] px-[20px]"
        :prepend-icon="itemMenu.icon"
        link
        :to="itemMenu.path"
        :title="itemMenu.label"
      />
    </div>

    <div class="pt-[150px]">
      <v-list-item prepend-icon="mdi-logout" link title="Logout" @click="handlerLogout" />
    </div>
  </div>
</template>

<style scoped>
.v-list-item--active {
  background: linear-gradient(
    to right,
    rgba(255, 222, 0, 1) 0%,
    rgba(188, 164, 0, 0.5) 2%,
    rgba(153, 133, 0, 0.2) 10%,
    rgba(0, 0, 0, 0.8) 100%
  );
  border-radius: 4px !important;
}
</style>
ч
