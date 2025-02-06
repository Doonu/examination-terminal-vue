import type { INavigationMenu } from '../model/navigation.types'

export const listNavigationMenu: INavigationMenu[] = [
  { path: '/', name: 'home', label: 'Панель управление', icon: 'mdi-view-dashboard' },
  { path: '/courses', name: 'courses', label: 'Курсы', icon: 'mdi-book-open-variant' },
  { path: '/assignments', name: 'assignments', label: 'Задания', icon: 'mdi-clipboard-text' },
  { path: '/grades', name: 'grades', label: 'Оценки', icon: 'mdi-school' },
  { path: '/messages', name: 'messages', label: 'Сообщения', icon: 'mdi-message-text' },
  { path: '/resources', name: 'resources', label: 'Ресурсы', icon: 'mdi-folder-open' },
  { path: '/profile', name: 'profile', label: 'Профиль', icon: 'mdi-account-circle' },
  { path: '/settings', name: 'settings', label: 'Настройки', icon: 'mdi-cog' },
]
