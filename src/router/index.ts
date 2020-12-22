import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/LoginPage.vue'
import Error404 from '../views/error/error404.vue'
import App from '@/App.vue'
import RegPage from '../views/RegPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import WorkSpace from '../views/WorkSpace.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: App
  },
  {
    path: '/Satistic',
    name: 'Satistic',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Авторизация',
    component: Login
  },
  {
    path: '/registration',
    name: 'Регистрация',
    component: RegPage
  },
  {
    path: '/workspace',
    name: 'Редактор сообщений',
    component: WorkSpace
  },
  {
    path: '/profile',
    name: 'Настройки',
    component: ProfilePage
  },
  {
    path: '/404',
    name: 'error 404',
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
