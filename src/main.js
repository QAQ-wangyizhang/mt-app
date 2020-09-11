// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/main.css';
import store  from "./store"
import api from './api/api';
Vue.use(ElementUI);
Vue.directive('document-click',{
  bind(el,binding,vnode){
    document.addEventListener('click',binding.value,false)
  },
  // insert(){
  //   console.log("insert")
  // },
  // update(){
  //   console.log("update")
  // }
})
Vue.prototype.$api = api;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})