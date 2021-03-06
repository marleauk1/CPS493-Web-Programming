import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Feed from '../views/Feed.vue'

import session from '../models/session'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed,
    beforeEnter: checkSessionUser
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') // lazy-loaded
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

function checkSessionUser (to, from, next) {
  if(session.user) {
    next();
  }else{
    next('Login');
  }
}