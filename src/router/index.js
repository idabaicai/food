import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'
import Detail from '../views/detail/Detail'
import User from '../views/user/User'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login', // 登录页
    name: 'Login',
    component: Login,
    beforeEnter (to, from, next) {
      if (localStorage.getItem('isLogin')) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/detail/:id', // 详情页
    component: Detail,
    props: true
  },
  {
    path: '/user/:id', // 个人中心页
    name: 'User',
    component: User,
    props: true
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('isLogin') // 是否登录
  if (!isLogin && to.name !== 'Login' && to.name !== 'Home') {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
