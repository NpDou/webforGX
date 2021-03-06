import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const origiPush = VueRouter.prototype.push
// 修改 原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return origiPush.call(this, location).catch(err=>err)
}
const origiReplace = VueRouter.prototype.replace
// 修改 原型对象中的push方法
VueRouter.prototype.replace = function replace(location) {
  return origiReplace.call(this, location).catch(err=>err)
}
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
  },
  {
    path: '/biddingInformation',
    name: 'biddingInformation',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/biddingInformation/index.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {
      scrollToTop: true
    },
    component: () => import('../components/detail.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      scrollToTop: false
    },
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      scrollToTop: false
    },
    component: () => import('../views/register/index.vue')
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    meta: {
      scrollToTop: false
    },
    component: () => import('../views/components/contactUs.vue')
  },
  {
    path: '/person',
    name: 'person',
    meta: {
      scrollToTop: true
    },
    redirect:'/person/person_home',
    component: () => import('../views/person/index.vue'),
    beforeEnter: (to, from, next) => {
      let SESSIONID = sessionStorage.getItem("SESSIONID");
      if(SESSIONID){
        next(); 
      }else{          
        alert('您还没有登录,请先登录!');
        next("/login")
      }     
    },
    children:[
      {
        path: 'person_detail',
        name: 'person_detail',
        meta: {
          scrollToTop: true
        },
        component: () => import('../views/person/components/detail.vue')
      },
      {
        path: 'person_home',
        name: 'person_home',
        meta: {
          scrollToTop: true
        },
        component: () => import('../views/person/components/home.vue')
      },
      {
        path: 'person_accountInfo',
        name: 'person_accountInfo',
        meta: {
          scrollToTop: true
        },
        component: () => import('../views/person/components/accountInfo.vue')
      },
      {
        path: 'person_companyInfo',
        name: 'person_companyInfo',
        meta: {
          scrollToTop: true
        },
        component: () => import('../views/person/components/companyInfo.vue')
      },
      {
        path: 'person_systemRecommendation',
        name: 'person_systemRecommendation',
        meta: {
          scrollToTop: true
        },
        component: () => import('../views/person/components/systemRecommendation.vue')
      },
      {
        path: 'person_changeNotificationforperson',
        name: 'person_changeNotificationforperson',
        meta: {
          scrollToTop: true
        },
        component: () => import('../views/person/components/changeNotificationforperson.vue')
      },
      {
        path: 'person_result',
        name: 'person_result',
        meta: {
          scrollToTop: true
        },
        component: () => import('../views/person/components/result.vue')
      },
    ]
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
