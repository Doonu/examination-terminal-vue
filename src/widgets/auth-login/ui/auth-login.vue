<script setup lang="ts">
import { usePostAuthLogin, useSession } from '@/entities/session'
import { Field, useForm } from 'vee-validate'
import { validationSchema } from '../lib/validation-schema'

const { mutateAsync: authLogin } = usePostAuthLogin()
const session = useSession()

const { handleSubmit } = useForm({
  validationSchema,
})

const handlerAuthLogin = handleSubmit((values) => {
  authLogin({
    email: values.email,
    password: values.password,
  }).then((data) => {
    session.updateSession({ accessToken: data.accessToken, refreshToken: data.refreshToken })
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
</template>

<style scoped></style>
