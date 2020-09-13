<template>
  <div class="page-register">
    <div class="m-header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="m-logo">
          <span>已有美团账号？</span>&nbsp;
          <el-button size="mini" class="login-btn" @click="login()">登录</el-button>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
        :rules="rules"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            autocomplete="off"
            @input="input()"
          ></el-input>
        </el-form-item>
        <div class="pw-strength">
          <div :class="['bar',strClass]"></div>
          <div class="letter">
            <span>弱</span>
            <span>中</span>
            <span>强</span>
          </div>
        </div>
        <el-form-item class="verify" label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16的字母数组下划线注册"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.rePassword !== "") {
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      strClass: "",
      registerForm: {
        userName: "",
        password: "",
        rePassword: "",
      },
      strengthClass: [],
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    input() {
      if (!this.registerForm.password) {
        this.strClass = "none";
        return;
      }
      let regStr = /(\w)+/g,
        regNum = /(\d)+/g,
        reg = /_/g;
      let strongth =
        this.registerForm.password.match(reg) &&
        this.registerForm.password.match(regStr) &&
        this.registerForm.password.match(regNum);
      if (
        this.registerForm.password.length > 20 ||
        (this.registerForm.password > 6 && strongth)
      ) {
        this.strClass = "strong";
      } else if (this.registerForm.password.length < 6) {
        this.strClass = "week";
      } else {
        this.strClass = "normal";
      }
    },
    login() {
      this.$router.push({ name: "login" });
    },
    submitForm(formName) {
      let self = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api
            .register({
              params: this.registerForm,
            })
            .then((res) => {
              if (res.status === "success") {
                this.$router.push({name : 'login'});
              }else{
                alert(res.msg)
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>