import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home-page.vue'
import AuthPage from '@/pages/auth-page.vue'
import { useSession } from '@/entities/session'
import { createPinia, setActivePinia } from 'pinia'
import CourseListPage from '@/pages/course-list-page.vue'
import DefaultLayout from '@/app/layout/default-layout.vue'
import AuthLayout from '@/app/layout/auth-layout.vue'
import CoursePage from '@/pages/course-page.vue'

const pinia = createPinia()
setActivePinia(pinia)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { requiresAuth: true, layout: DefaultLayout },
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage,
      meta: { layout: AuthLayout },
    },
    {
      path: '/courses',
      meta: { requiresAuth: true, layout: DefaultLayout },
      children: [
        {
          path: '',
          name: 'courses',
          component: CourseListPage, // /courses
        },
        {
          path: ':id',
          name: 'course-item',
          component: CoursePage, // /courses/2
        },
      ],
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const sessionStore = useSession()
  const loggedIn = !!sessionStore.accessToken

  if (to.meta.requiresAuth && !loggedIn) {
    if (to.name !== 'auth') {
      return next({ name: 'auth' })
    }
    return next()
  }

  if (to.name === 'auth' && loggedIn) {
    return next({ name: 'home' })
  }

  next()
})

export default router
