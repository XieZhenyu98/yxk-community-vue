import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Publish from '@/views/Publish'
import Detail from '@/views/Detail'
import Personal from '@/views/Personal'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/publish',
    name: 'publish',
    component: Publish
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/personal',
    name: 'personal',
    component: Personal
  }
]

const router = new VueRouter({
  routes
})

export default router
