<template>
  <div>
    <el-card class="register-card">
      <template #header>
        <div class="register-card-header">
          <span>注册转笔圈</span>
        </div>
      </template>
      <div>
        <el-form :model="formData" :rules="rules" ref="registerForm">
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="formData.username"
              placeholder="请输入用户名"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="formData.password"
              placeholder="请输入密码"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item label="请再输入一遍密码" prop="repeatPassword">
            <el-input
              v-model="formData.repeatPassword"
              placeholder="请再输入一遍密码"
              clearable
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div style="float:right">
              <el-button type="primary" @click="submitForm('ruleForm')"
              >注册</el-button
            >
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: '',
        repeatPassword: '',
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
        ],
        repeatPassword: [
          { required: true, message: "请再输入一次密码", trigger: "blur" }
        ]
      },
    }
  },
};
</script>

<style lang="less" scoped>
.register-card-header {
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

.register-card {
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