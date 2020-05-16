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
    component: () => import('@/views/Offices') // Lazy loading ftw
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('@/views/Success') // Lazy loading ftw
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Guard to prevent refresh in the middle of the process
router.beforeEach((to, from, next) => {
  if (!from.name && to.name !== 'home') {
    // user is landing directly here
    next({ name: 'home' })
    return
  }

  next()
})

export default router
