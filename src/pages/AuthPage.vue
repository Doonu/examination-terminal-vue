<script setup lang="ts">
import { AuthLogin } from '../widgets/AuthLogin'
import { AuthRegistration } from '../widgets/AuthRegistration'
import { ref } from 'vue'
import ToggleTheme from '@/features/toggle-theme/ui/toggle-theme.vue'
const tab = ref('one')
</script>
Í
<template>
  <div>
    <toggle-theme />
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">Авторизация</v-tab>
      <v-tab value="two">Регистрация</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <auth-login />
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          <auth-registration />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </div>
</template>

<style scoped></style>
