<template>
  <div class="root">
    <div class="login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <img src="../../assets/login-logo.758b34e9.png" alt="" />
        <el-form-item prop="mobile">
          <el-input v-model="ruleForm.mobile" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" prefix-icon="el-icon-lock" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" :loading="fals">登录</el-button>
        </el-form-item>
        <el-form>
          <span>
            仅用于IT培训教学使用，为保障您的个人信息安全，请勿向平台录入任何个人敏感信息 (如手机号、身份证号等)!
          </span>
        </el-form>
      </el-form>
    </div>
  </div>
</template>
<script>
import { loginAPi } from "@/api/api.js"
import { setToken } from "@/utils/js-cookie.js"
export default {
  name: "LoGin",
  data() {
    return {
      ruleForm: {
        mobile: "13800000002",
        password: "888itcast.CN764%..."
      },
      fals: false,
      rules: {
        mobile: [{ required: true, message: "请输入你的手机号", trigger: "blur" }],
        password: [{ required: true, message: "请输入你的密码", trigger: "blur" }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      //登录
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //设置登录按钮动画
          this.fals = true
          //调用登录接口
          loginAPi(this.ruleForm).then((res) => {
            console.log(res)
            if (res.data.code == 10000) {
              //关闭登录按钮动画
              this.fals = false
              //登录成功提示信息
              this.$message.success(res.data.message)
              //登录成功后把token存到本地
              setToken(res.data.data)
              //登录成功后跳转到首页
              this.$router.replace("/homepage")
            } else {
              //关闭登录按钮动画
              this.fals = false
              //登录失败提示信息
              this.$message.error(res.data.message)
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.root {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url("../../assets/common/login.jpg");
  background-position: center;
  background-position: center;
  .login {
    width: 436px;
    height: 400px;
    margin: auto;
    margin-top: 200px;
    img {
      margin-bottom: 50px;
    }

    :deep(.el-input--small .el-input__inner) {
      height: 48px;
      line-height: 32px;
      background-color: #d3e4ff;
      color: #76b0fe;
    }
    .el-button {
      width: 100%;
      height: 60px;
      font-size: 24px;
      background-color: #407ffe;
    }
    span {
      color: #ffff;
      font-size: 14px;
    }
    :deep(.el-form-item__error) {
      color: white;
    }
  }
}
</style>
