import Vue from 'vue'
import VueRouter from 'vue-router'
import * as auth from '../../services/AuthService'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => 
    import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    // beforeEnter: (to, from, next) => {
    //   // if (!auth.isLoggedIn()) {
    //   //   next()
    //   // } else {
    //   //   next('/dashboard')
    //   // }
    // }
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
      import(/* webpackChunkName: "login" */ '../views/auth/AuthyLogin.vue'),
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedIn()) {
        next()
      } else {
        next('/harmoney-dashboard')
      }
    }
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () =>
      import(/* webpackChunkName: "notifications" */ '../views/pages/Notifications.vue'),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: () =>
      import(/* webpackChunkName: "transactions" */ '../views/pages/Transactions.vue'),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/add-account',
    name: 'add-account',
    component: () =>
      import(/* webpackChunkName: "addaccount" */ '../views/pages/AddAccount.vue'),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/user-profile',
    name: 'userprofile',
    component: () =>
      import(/* webpackChunkName: "userprofile" */ '../views/pages/UserProfile.vue'),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/auth/Register.vue'),
    // beforeEnter: (to, from, next) => {
    //   if (!auth.isLoggedIn()) {
    //     next()
    //   } else {
    //     next('/dashboard')
    //   }
    // }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
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
  },
  {
    path: '/harmoney-dashboard',
    name: 'harmoney-dashboard',
    component: () =>
      import(
        /* webpackChunkName: "harmoney-dashboard" */ '../views/pages/Harmon€yDashboard.vue'
      ),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: () =>
      import(/* webpackChunkName: "signup" */ '../views/auth/Sign-Up.vue'),
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedIn()) {
        next()
      } else {
        next('/harmoney-dashboard')
      }
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
