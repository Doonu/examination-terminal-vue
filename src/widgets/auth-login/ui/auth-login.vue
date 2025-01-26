<script setup lang="ts">
import { usePostAuthLogin, useSession } from '@/entities/session'
import { Field, useForm } from 'vee-validate'
import { validationSchema } from '../lib/validation-schema'
import { ref } from 'vue'

const { mutateAsync: authLogin } = usePostAuthLogin()
const session = useSession()

const { handleSubmit } = useForm({
  validationSchema,
})
const snackbar = ref(false)

const handlerAuthLogin = handleSubmit((values) => {
  authLogin({
    email: values.email,
    password: values.password,
  })
    .then((data) => {
      session.updateSession({ accessToken: data.accessToken, refreshToken: data.refreshToken })
    })
    .catch(() => {
      snackbar.value = true
    })
})
</script>

<template>
  <form @submit.prevent="handlerAuthLogin">
    <Field name="email" v-slot="{ field, errors }" :rules="{ required: true }">
      <v-text-field
        v-bind="field"
        outlined
        placeholder="Введите почту"
        :error="!!errors.length"
        :error-messages="errors"
      />
    </Field>

    <Field name="password" v-slot="{ field, errors }" :rules="{ required: true }">
      <v-text-field
        v-bind="field"
        outlined
        placeholder="Введите пароль"
        :error="!!errors.length"
        :error-messages="errors"
      />
    </Field>

    <v-btn type="submit" class="mt-4" color="active"> Войти </v-btn>
  </form>

  <v-snackbar color="error" v-model="snackbar" :timeout="3000" location="left">
    <div>Неверный логин или пароль</div>
  </v-snackbar>
</template>

<style scoped></style>
