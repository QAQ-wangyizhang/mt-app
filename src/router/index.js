import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from "@/layout/blank"
import Index from "@/page/index"
import City from "@/page/changeCity"
import Goods from "@/page/goodsList"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name : "default",
      component: defaultPage,
      redirect : "/index",
      children : [{
        path : "s/:name",
        name : "goods",
        component : Goods
      },{
        path : '/index',
        name : "index",
        component : Index
      },{
        path : "/city",
        name : "changeCity",
        component:City
      }]
    },
    {
      path : '/blank',
      name : "blank",
      component : blankPage
    }
  ]
})
