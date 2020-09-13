<template>
  <div class="page-login">
    <el-alert v-if="error == 'noName'" title="请输入账户名！" type="warning" effect="dark"></el-alert>
    <el-alert v-else-if="error == 'noPassword'" title="请输入密码！" type="warning" effect="dark"></el-alert>
    <el-alert v-else-if="error == 'all'" title="请输入账户名和密码！" type="warning" effect="dark"></el-alert>
    <div class="login-header">
      <a class="logo" href="http://www.meituan.com/"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt />
      </div>
      <div class="form">
        <p>
          <span>账户登录</span>
        </p>
        <el-input prefix-icon="profile" v-model="userName" placeholder="手机号/用户名/邮箱"></el-input>
        <el-input prefix-icon="password" v-model="password" type="password" placeholder="密码"></el-input>
        <div class="foot">
          <a href="#">忘记密码?</a>
        </div>
        <el-button type="primary" class="btn-login" @click="login()">登录</el-button>
        <p class="reg">
          <span>还没有账号?</span>
          <router-link :to="{name:'register'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <a
              class="oauth__link oauth__link--qq"
              href="/account/connect/tencent"
              data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}"
              target="_blank"
            ></a>
            <a
              class="oauth__link oauth__link--weibo"
              href="/account/connect/sina"
              data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>
        ©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
      </p>
    </footer>
  </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
  computed : {
  },
  data() {
    return {
      userName: "",
      password: "",
      error: false,
    };
  },
  methods: {
    ...mapMutations(['setUserName']),
    login() {
      if (!this.userName) {
        this.error = "noName";
      }
      if (!this.password) {
        this.error = "noPassword";
      }
      if (!this.userName && !this.password) {
        this.error = "all";
      }
      setTimeout(() => {
        this.error = false;
      }, 2000);
      if (this.password && this.userName) {
        this.$api
          .login({
            userName: this.userName,
            password: this.password,
          })
          .then((res) => {
            if (res.status == "success") {
              this.$notify({
                title: "成功",
                message: res.msg,
                type: "success",
              });
              this.setUserName(this.userName);
              console.log(this.userName);
              this.$router.push({ name: "index" });
            } else {
              this.$notify.error({
                title: "错误",
                message: res.msg,
              });
            }
          });
      }

      // console.log(this.error)
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>