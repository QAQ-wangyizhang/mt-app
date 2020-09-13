<template>
  <div class="m-geo">
     <div class="position">
         <i class="el-icon-location"/>
         {{position}}
         <router-link class="changeCity" :to="{name : 'changeCity'}">
             切换城市
         </router-link>
     </div>
     [
        <a href="#">{{city}}</a>
     ]
     <div class="m-user" v-if="!userName">
         <router-link class="login" :to="{name : 'login'}">
             立即登录
         </router-link>
         <router-link class="register" :to="{name : 'register'}">
             注册
         </router-link>
     </div>
     <div class="m-user" v-else >
         <router-link class="login" :to="{name : 'login'}">
             欢迎您
         </router-link>
         <router-link class="register" :to="{name : 'register'}">
             {{userName}}
         </router-link>
     </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    computed : {
        ...mapState(['position','city','userName'])
    }
}
</script>

<style>

</style>