<script setup lang="ts">
import { usePostAuthLogin, useSession } from '@/entities/session'

const { mutateAsync: authLogin } = usePostAuthLogin()
const session = useSession()

const handlerAuthLogin = () => {
  authLogin({
    email: 'daniil@mail.ru',
    password: '123456',
  }).then((data) => {
    session.updateSession({ accessToken: data.accessToken, refreshToken: data.refreshToken })
  })
}
</script>

<template><button @click="handlerAuthLogin">auth</button></template>

<style scoped></style>
