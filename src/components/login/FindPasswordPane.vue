<template>
  <div>
    <el-card class="password-card">
      <template #header>
        <div class="password-card-header">
          <span>找回密码</span>
        </div>
      </template>
      <div>
        <el-form :model="formData" :rules="rules" ref="registerForm">
          <el-form-item label="邮箱" prop="username">
            <el-input
              v-model="formData.username"
              placeholder="请输入账户绑定的邮箱"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code" class="code-form-item">
            <el-input
              v-model="formData.code"
              placeholder="请输入接收到的验证码"
              clearable
            ></el-input>
            <el-button
              size="small"
              :type="codeButtonProp.type"
              :disabled="codeButtonProp.disabled"
              style="float: right; margin-top: 10px"
              @click="sendCode"
              >{{codeButtonProp.text}}</el-button
            >
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="formData.password"
              placeholder="请设置新密码"
              clearable
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item label="请再输入一遍密码" prop="repeatPassword">
            <el-input
              v-model="formData.repeatPassword"
              placeholder="请再输入一遍密码"
              type="password"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div style="float: right">
              <el-button type="primary" @click="submitForm('ruleForm')"
                >找回密码</el-button
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
        username: "",
        password: "",
        repeatPassword: "",
      },
      codeButtonProp: {
        type: 'primary',
        disabled: false,
        text: '发送验证码'
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
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        repeatPassword: [
          { required: true, message: "请再输入一次密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    sendCode(){
      this.codeButtonProp.type = 'default';
      this.codeButtonProp.disabled = true;
      let counter = 10;
      const timer = setInterval(() => {
        counter--;
        if (counter == 0) {
          clearInterval(timer);
          this.codeButtonProp.type = 'primary';
          this.codeButtonProp.disabled = false;
          this.codeButtonProp.text = '发送验证码';
          return;
        }
        this.codeButtonProp.text = `${counter}秒后可再发送`;
      }, 1000)
    }
  }
};
</script>

<style lang="less" scoped>
.password-card-header {
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

.password-card {
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

</style>