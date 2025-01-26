<script setup lang="ts">
import { usePostAuthRegistration, useSession } from '@/entities/session'
import { Field, useForm } from 'vee-validate'
import { validationSchema } from '../lib/validation-schema'
import { useGetRolesList } from '@/entities/role'

const { mutateAsync: authRegistration } = usePostAuthRegistration()
const session = useSession()

const { handleSubmit } = useForm({ validationSchema })

const { data: roleList } = useGetRolesList()

const handlerAuthRegistration = handleSubmit((values) => {
  authRegistration({
    email: values.email,
    password: values.password,
    roleId: values.roleId,
  }).then((data) => {
    session.updateSession({ accessToken: data.accessToken, refreshToken: data.refreshToken })
  })
})
</script>

<template>
  <form @submit.prevent="handlerAuthRegistration">
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

    <Field name="roleId" v-slot="{ field, errors }" :rules="{ required: true }">
      <v-select
        v-bind="field"
        :items="roleList"
        outlined
        placeholder="Выберите роль"
        label="Роль"
        item-title="name"
        item-value="id"
        :error="!!errors.length"
        :error-messages="errors"
      />
    </Field>

    <v-btn type="submit" class="mt-4" color="active"> Регистрация </v-btn>
  </form>
</template>

<style scoped></style>
