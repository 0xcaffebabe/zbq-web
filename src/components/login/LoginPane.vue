<template>
  <el-card class="login-card">
      <template #header>
        <div class="login-card-header">
          <span>登陆转笔圈</span>
        </div>
      </template>
      <div class="login-form">
        <el-avatar
          size="large"
          src="https://pic3.zhimg.com/v2-89b980f785a7d9dd1068fb9d171ed6cd_is.jpg"
          class="user-avatar"
        ></el-avatar>
        <el-form
          :model="formData"
          :rules="rules"
          ref="loginForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="formData.username" placeholder="请输入用户名" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formData.password" placeholder="请输入密码" clearable type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <div style="float:right">
              <el-button type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
            </div>
          </el-form-item>
          <el-form-item></el-form-item>
        </el-form>
      </div>
    </el-card>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 16,
            message: "用户名长度在 3 到 16 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      },
    };
  }
}
</script>

<style lang="less" scoped>
.login-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.login-card {
  min-width: 320px;
  max-width: 480px;
  margin: 0 auto;
  margin-top: 144px;
  opacity: 0.8;
}

.el-card__header {
  padding: 10px 14px;
}

.login-form {
  text-align: center;
}

.user-avatar {
  width: 64px;
  height: 64px;
  line-height: 64px;
}
</style>