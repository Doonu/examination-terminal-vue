<script setup lang="ts">
import { usePostAuthRegistration, useSession } from '@/entities/session'

const { mutateAsync: authRegistration } = usePostAuthRegistration()
const session = useSession()

const handlerAuthRegistration = () => {
  authRegistration({
    email: '1234@gmail.com',
    password: '123456',
    roleId: 1,
  }).then((data) => {
    console.log(data)
    session.updateSession({ accessToken: data.accessToken, refreshToken: data.refreshToken })
  })
}
</script>

<template>
  <button @click="handlerAuthRegistration">registr</button>
</template>

<style scoped></style>
