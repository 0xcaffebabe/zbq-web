<template>
  <div class="bg">
    <login-pane v-show="panelType === 'login'" />
    <register-pane v-show="panelType === 'register'" />
    <password-pane v-show="panelType === 'password'" />

    <div class="bottom-tip">
      <p v-if="panelType !== 'register'">
        <span class="tip-text">没有账号？</span>
        <el-button type="primary" size="small" @click="goToRegister()"
          >注册</el-button
        >
      </p>
      <p v-if="panelType !== 'login'">
        <span class="tip-text">已有账号？</span>
        <el-button type="primary" size="small" @click="goToLogin()"
          >登录</el-button
        >
      </p>
      <p v-if="panelType !== 'password'">
        <span class="tip-text">忘记密码？</span>
        <el-button type="primary" size="small" @click="goToPassword()"
          >找回密码</el-button
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import LoginPane from "@/components/login/LoginPane.vue";
import RegisterPane from "@/components/login/RegisterPane.vue";
import PasswordPane from "@/components/login/FindPasswordPane.vue";
export default {
  name: "LoginPage",
  data() {
    return {
      panelType: "login",
    };
  },
  methods: {
    goToRegister() {
      this.panelType = "register";
    },
    goToLogin() {
      this.panelType = "login";
    },
    goToPassword() {
      this.panelType = "password";
    },
  },
  components: {
    LoginPane,
    RegisterPane,
    PasswordPane
  },
};
</script>

<style lang="less">
.bg {
  background: url(//cdn88.oss-cn-beijing.aliyuncs.com/zbq/img/back.jpg)
    no-repeat 0px 0px;
  background-size: cover;
  -webkit-background-size: cover;
  overflow: auto;
  height: 1200px;
}
.bottom-tip {
  color: white;
  text-align: center;
  margin-top: 40px;
  p {
    display: inline;
  }
  .tip-text {
    padding: 0 10px;
  }
}
</style>