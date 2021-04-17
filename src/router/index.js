import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'

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
    component: Login,
    beforeEnter (to, from, next) {
      if (localStorage.getItem('isLogin')) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  routes
})
const isLogin = localStorage.getItem('isLogin')
router.beforeEach((to, from, next) => {
  if (!isLogin && to.name !== 'Login') {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
