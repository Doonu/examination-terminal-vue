<script setup lang="ts">
import { NavigationMenu } from '@/widgets/navigation-menu'
import { RouterView } from 'vue-router'
import { useGetProfile } from '@/entities/profile'
import { ref, watch } from 'vue'
import { UpdateProfile } from '@/features/update-profile'

const { data: profile } = useGetProfile()
const isDialog = ref(false)

watch(
  () => profile.value,
  (newVal) => {
    if (newVal) {
      isDialog.value = !newVal.firstName
    }
  },
)
</script>

<template>
  <div class="grid h-max bg-inherit max-w-[var(--max-desktop)]">
    <div class="flex flex-col flex-1 h-full overflow-hidden max-w-[var(--max-desktop)]">
      <div class="flex">
        <v-dialog v-model="isDialog" persistent max-width="500px">
          <v-card>
            <v-card-title>Добавление информации профиля</v-card-title>
            <v-card-item><update-profile /></v-card-item>
          </v-card>
        </v-dialog>
        <navigation-menu />

        <div class="flex-1 align-content-start p-[32px]"><RouterView /></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
