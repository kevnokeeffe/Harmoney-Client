import Vue from 'vue'
import VueRouter from 'vue-router'
import * as auth from '../../services/AuthService'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => 
    import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/pages/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/auth/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedIn()) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/auth/Register.vue'),
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedIn()) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/dashboard',
    name: 'dash-board',
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ '../views/pages/Dashboard.vue'
      ),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next()
      } else {
        next('/login')
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
