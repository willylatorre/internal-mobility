import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/offices',
    name: 'offices',
    // Guard to prevent undesired navigation
    beforeEnter: (to, from, next) => {
      if (from.name !== 'home') {
        next({ name: 'home' })
        return
      }
      next()
    },
    component: () => import('@/views/Offices') // Lazy loading ftw
  },
  {
    path: '/success',
    name: 'success',
    // Guard to prevent undesired navigation
    beforeEnter: (to, from, next) => {
      if (from.name !== 'offices') {
        next({ name: 'home' })
        return
      }
      next()
    },
    component: () => import('@/views/Success') // Lazy loading ftw
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

export const _routes = routes
