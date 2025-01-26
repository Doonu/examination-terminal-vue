import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AuthPage from '@/pages/AuthPage.vue'
import { useSession } from '@/entities/session'

const isAuthenticated = () => {
  const sessionStore = useSession()
  return !!sessionStore.accessToken
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { requiresAuth: true },
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage,
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authRequired = to.meta.requiresAuth
  const loggedIn = isAuthenticated()

  if (authRequired && !loggedIn) {
    if (to.name !== 'auth') {
      return next({ name: 'auth' })
    }
  } else if (to.name === 'auth' && loggedIn) {
    return next({ name: 'home' })
  }

  next()
})

export default router
