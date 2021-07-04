import { createRouter, createWebHashHistory } from 'vue-router'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/',
    name: 'Test',
    component: Test
  },
  {
    path: '/about',
    name: 'About',
    beforeEach (to, from, next) {
      next()
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
