<template>
  <div class="login_container">
    <div class="login_box">
      <!--头像区-->
      <div class="avatar_box">
        <img src="../assets/yklogo1.png"/>
      </div>
      <div style="position: absolute;top: 74px;left: 30px;font-size: 10px">
        <span><el-link style="font-size: 10px;margin-bottom: 5px;margin-right: 5px" @click="toHome">首页</el-link>请输入信息进行注册，已有帐号？<el-link style="font-size: 10px;margin-bottom: 5px" @click="toLogin">去登录</el-link></span>
      </div>
      <!--登录表单区-->
      <el-form ref="longinFromRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!--邮箱-->
        <el-form-item prop="email">
          <el-input v-model="loginForm.email" prefix-icon="el-icon-user-solid" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <!--用户名-->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <!--城市-->
        <el-form-item prop="city">
          <el-input v-model="loginForm.city" prefix-icon="el-icon-s-home" placeholder="请输入你所在的城市"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-unlock" type="password" placeholder="请输入您的密码"></el-input>
        </el-form-item>
        <!--再次输入密码-->
        <el-form-item prop="passwordTwo">
          <el-input v-model="passwordTwo" prefix-icon="el-icon-unlock" type="password" placeholder="请再次输入您的密码"></el-input>
        </el-form-item>
        <!--性别-->
        <el-form-item prop="sex" align="left">
          <i class="el-icon-male" style="margin-left: 10px;font-size: 20px"></i>
          <el-radio-group v-model="loginForm.sex" style="margin-left: 30px">
            <el-radio :label="1" value="1">男</el-radio>
            <el-radio :label="0" value="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <!--输入验证码-->
        <el-form-item prop="isMan">
          <el-input v-model="isMan" prefix-icon="el-icon-edit-outline" placeholder="1+1?"></el-input>
        </el-form-item>
        <!--按钮-->
        <el-form-item class="btns">
          <el-button type="primary" @click="register">注册</el-button>
          <el-button type="info" @click="resetLoginFrom">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        email: '',
        username: '',
        password: '',
        sex: 1,
        city: ''
      },
      passwordTwo: '',
      // 表单验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { min: 3, max: 20, message: '用户名长度未3到20个字符', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 3, max: 20, message: '用户名长度未3到20个字符', trigger: 'blur' }
        ],
        city: [
          { required: true, message: '请输入所在城市', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '用户名长度未3到10个字符', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ]
      },
      isMan: ''
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginFrom () {
      this.$refs.longinFromRef.resetFields()
    },
    register () {
      window.sessionStorage.clear()
      this.$refs.longinFromRef.validate(async valid => {
        if (!valid) return
        const { data: res } = (await this.$http.post('user/add', this.loginForm))
        if (res.code === -1) return this.$message.error('登录失败，所填信息有误！')
        this.$message.success('注册成功！')
        await this.$router.push('/login')
      })
    },
    toLogin () {
      this.$router.push('/login')
    },
    toHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.login_container{
  background-color: #2b4b6b;
  height: 100%;
}
.login_box{
  width: 450px;
  height: 600px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box{
    height: 60px;
    width: 250px;
    border: 1px solid #eee;
    border-radius: 15%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-55%);
    background-color: #fff;
    //img {
    //  width: 200%;
    //  height: 100%;
    //  border-radius: 50%;
    //  background-color: #eee;
    //}
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }

  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    //左右边距
    padding: 0 20px;
    box-sizing: border-box;
  }

  img {
    width: 400px;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-42%);
  }
}
</style>
