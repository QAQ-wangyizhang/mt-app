import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from "@/layout/blank"
import Index from "@/page/index"
import City from "@/page/changeCity"
import Goods from "@/page/goodsList"
import Login from "@/page/login"
import Register from "@/page/register"

Vue.use(Router)

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [{
      path: '/',
      name: "default",
      component: defaultPage,
      redirect: "/index",
      children: [{
        path: "s/:name",
        name: "goods",
        component: Goods
      }, {
        path: '/index',
        name: "index",
        component: Index
      }, {
        path: "/city",
        name: "changeCity",
        component: City
      }]
    },
    {
      path: '/blank',
      name: "blank",
      redirect : "/login",
      component: blankPage,
      children: [{
        path: "/login",
        name: "login",
        component: Login
      },{
        path : "/register",
        name : "register",
        component : Register
      }
    ]
    }
  ]
})
