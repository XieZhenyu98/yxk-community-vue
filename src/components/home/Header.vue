<template>
  <el-row style="height: 100%" align="left">
    <el-col :span="18" :offset="3" style="height: 100%">
      <el-row style="height: 100%">
        <el-col class="gray" :span="7"><img src="../../assets/yklogo.png" height="300px" style="margin-top: -120px"/></el-col>
        <el-col :span="2" style="font-size: 18px;padding-top: 16px;text-align: left;color: #EBEEF5"><div @click="toHome()"><i class="el-icon-chat-dot-round" style="font-size: 25px;margin-right: 2px;"></i>首页</div></el-col>
        <el-col :span="2" style="font-size: 18px;padding-top: 16px;text-align: left;color: #EBEEF5"><div @click="toPlate()"><i class="el-icon-date" style="font-size: 25px;margin-right: 2px;"></i>板块</div></el-col>
        <el-col :span="2" style="font-size: 18px;padding-top: 16px;text-align: left;color: #EBEEF5"><i class="el-icon-s-data" style="font-size: 25px;margin-right: 2px;"></i>资源</el-col>
        <!-- 登录与注册、用户名 -->
        <el-col :span="7" :offset="4" style="padding-top: 12px;display:table-cell;">
          <!-- user不存在显示 -->
          <el-link v-if="!isLogin" :underline="false" @click="toLogin" style="margin-top: 6px"><span style="font-size: 18px;"><i class="el-icon-user-solid"></i>登录</span></el-link>
          <el-link v-if="!isLogin" :underline="false" @click="toRegister" style="margin-top: 6px"><span style="font-size: 18px;margin-left: 20px;">注册</span></el-link>
          <!-- user存在显示 -->
          <el-dropdown>
            <div>
              <img height="40px" v-if="isLogin" :src="this.$http.defaults.baseURL+userInfo.image">
              <span v-if="isLogin" style="color: #EBEEF5;margin-left: 10px;margin-bottom: 10px;position: relative;bottom: 12px">欢迎您：{{userInfo.username}}</span>
            </div>
            <el-dropdown-menu>
              <el-dropdown-item icon="el-icon-house">
                <span @click="toPersonal(userInfo.id)">我的主页</span>
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-message-solid">
                <span>我的消息</span>
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-setting">
                <span @click="toUserEdit(userInfo.id)">基本设置</span>
              </el-dropdown-item>
              <el-dropdown-item v-if="isLogin" divided icon="el-icon-warning">
                <span @click="logOut()">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Header',
  created () {
    this.userInfo = JSON.parse(window.sessionStorage.getItem('user'))
    if (this.userInfo === null) {
      this.isLogin = false
    } else {
      this.isLogin = true
    }
  },
  data () {
    return {
      userInfo: {},
      isLogin: false
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    logOut () {
      window.sessionStorage.clear()
      this.$router.push('/login')
      this.$message.success('退出登录成功!')
    },
    toRegister () {
      this.$router.push('/register')
    },
    toPersonal (value) {
      this.$router.push('/personal?userId=' + value)
    },
    toUserEdit () {
      this.$router.push('/userEdit/basicSetting')
    },
    toPlate () {
      this.$router.push('/Plate')
    },
    toHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
//.gray {
//  -webkit-filter: grayscale(100%);
//  -moz-filter: grayscale(100%);
//  -o-filter: grayscale(100%);
//  filter: grayscale(100%);
//}
</style>
