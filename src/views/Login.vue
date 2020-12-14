<template>
  <div class="login_container">
    <div class="login_box">
      <!--头像区-->
      <div class="avatar_box">
        <img src="../assets/yklogo1.png"/>
      </div>
      <div style="position: absolute;top: 84px;left: 30px;font-size: 10px">
        <span><el-link style="font-size: 10px;margin-bottom: 5px;margin-right: 5px" @click="toHome">首页</el-link>请输入帐号密码登录，没有帐号？<el-link style="font-size: 10px;margin-bottom: 5px" @click="toRegister">去注册</el-link></span>
      </div>
      <!--登录表单区-->
      <el-form ref="longinFromRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!--用户名-->
        <el-form-item prop="username">
          <el-input v-model="loginForm.email" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
        </el-form-item>
        <!--按钮-->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
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
        email: '751811152@222.com',
        password: 'xiaoxiang'
      },
      // 表单验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        email: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '用户名长度未3到10个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '用户名长度未3到10个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginFrom () {
      this.$refs.longinFromRef.resetFields()
    },
    login () {
      window.sessionStorage.clear()
      this.$refs.longinFromRef.validate(async valid => {
        // eslint-disable-next-line no-useless-return
        if (!valid) return
        // eslint-disable-next-line no-unused-vars
        const { data: res } = (await this.$http.post('user/login', this.loginForm))
        // eslint-disable-next-line eqeqeq
        if (res.code == -1) return this.$message.error('登录失败，账号或密码错误！')
        this.$message.success('登录成功！')
        // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage中
        //   1.1 项目中出了登录之外的其它API接口，必须是在登录之后才能访问
        //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage中
        // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
        window.sessionStorage.setItem('token', res.data[0])
        window.sessionStorage.setItem('user', JSON.stringify(res.data[1]))
        await this.$router.push('/')
      })
    },
    toRegister () {
      this.$router.push('/register')
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
  height: 300px;
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
