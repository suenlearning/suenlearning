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
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/workspace',
    name: 'generators',
    component: () =>
      import(/* webpackChunkName: "generators" */ '../views/Generators.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
  // for dynamic generator routes: Real World Vue 2.5
  // {
  //   path: '/generator/:worksheet',
  //   name: 'user',
  //   component: User,
  //   props: true
  // }
]

// mode history to remove the "#" from url
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
