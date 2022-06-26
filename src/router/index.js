import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/aboutUs/index.vue')
  },
  {
    path: '/companyDynamics',
    name: 'companyDynamics',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/companyDynamics/index.vue')
  }
]

//路由导航冗余报错（路由重复）
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
