<script setup lang="ts">
import { AuthLogin } from '../widgets/auth-login'
import { AuthRegistration } from '../widgets/auth-registration'
import { ref } from 'vue'
const tab = ref('one')
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="bg-secondaryBg mx-auto w-1/3 p-2 rounded-xl">
      <div class="grid justify-center mb-8">
        <v-tabs v-model="tab" bg-color="transparent" color="active">
          <v-tab value="one">Авторизация</v-tab>
          <v-tab value="two">Регистрация</v-tab>
        </v-tabs>
      </div>

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
  </div>
</template>

<style scoped></style>
