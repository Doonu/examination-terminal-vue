<script setup lang="ts">
import { Field, useForm } from 'vee-validate'
import { updateProfileValidation } from '../lib/updateProfile.validation'
import { getProfileKey, usePutProfile } from '@/entities/profile'
import { queryClient } from '@/shared/config'

const { handleSubmit } = useForm({ validationSchema: updateProfileValidation })
const { mutateAsync: putProfile } = usePutProfile()

const handleUpdateProfile = handleSubmit((values) => {
  putProfile({
    firstName: values.firstName,
    lastName: values.lastName,
    age: values.age,
    gender: values.gender,
  }).then(() => {
    queryClient.refetchQueries({ queryKey: [getProfileKey] })
  })
})

const genderList = [
  { value: 'Женщина', gender: 1 },
  { value: 'Мужчина', gender: 2 },
]
const ages = [...Array(121).keys()]
</script>

<template>
  <form @submit.prevent="handleUpdateProfile">
    <Field name="firstName" v-slot="{ field, errors }" :rules="{ required: true }">
      <v-text-field
        v-bind="field"
        outlined
        placeholder="Введите свое имя"
        :error="!!errors.length"
        :error-messages="errors"
      />
    </Field>

    <Field name="lastName" v-slot="{ field, errors }" :rules="{ required: true }">
      <v-text-field
        v-bind="field"
        outlined
        placeholder="Введите свою фамилию"
        :error="!!errors.length"
        :error-messages="errors"
      />
    </Field>

    <Field name="age" v-slot="{ field, errors }" :rules="{ required: true }">
      <v-select
        v-bind="field"
        :items="ages"
        outlined
        placeholder="Выберите возраст"
        label="Возраст"
        :error="!!errors.length"
        :error-messages="errors"
      />
    </Field>

    <Field name="gender" v-slot="{ field, errors }" :rules="{ required: true }">
      <v-select
        v-bind="field"
        :items="genderList"
        outlined
        placeholder="Выберите пол"
        label="Пол"
        item-title="value"
        item-value="gender"
        :error="!!errors.length"
        :error-messages="errors"
      />
    </Field>

    <v-btn type="submit" class="mt-4" color="active">Обновить профиль</v-btn>
  </form>
</template>

<style scoped></style>
