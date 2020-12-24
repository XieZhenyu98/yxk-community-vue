import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Publish from '@/views/Publish'
import Detail from '@/views/Detail'
import Personal from '@/views/Personal'
import UserEdit from '@/views/UserEdit'
import UserCenter from '@/components/useredit/UserCenter'
import BasicSettings from '@/components/useredit/BasicSettings'
import UserMessage from '@/components/useredit/UserMessage'
import UserPublishedList from '@/components/useredit/usercenter/UserPublishedList'
import UserCollectionList from '@/components/useredit/usercenter/UserCollectionList'

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
  },
  {
    path: '/userEdit',
    name: 'userEdit',
    component: UserEdit,
    children: [
      {
        path: 'userCenter',
        name: 'userCenter',
        component: UserCenter,
        redirect: '/userEdit/userCenter/userPublishedList',
        children: [
          {
            path: 'userPublishedList',
            name: 'userPublishedList',
            component: UserPublishedList
          },
          {
            path: 'userCollectionList',
            name: 'userCollectionList',
            component: UserCollectionList
          }
        ]
      },
      {
        path: 'basicSetting',
        name: 'basicSetting',
        component: BasicSettings
      },
      {
        path: 'userMessage',
        name: 'userMessage',
        component: UserMessage
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
