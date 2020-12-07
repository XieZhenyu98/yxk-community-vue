<template>
  <el-row style="height: 100%" align="left">
    <el-col :span="18" :offset="3" style="height: 100%">
      <el-row style="height: 100%">
        <el-col class="gray" :span="6"><img src="../../assets/yklogo.png" height="300px" style="margin-top: -120px"/></el-col>
        <el-col :span="2" style="font-size: 18px;padding-top: 16px;text-align: left;color: #EBEEF5"><i class="el-icon-chat-dot-round" style="font-size: 25px;margin-right: 2px;"></i>交流</el-col>
        <el-col :span="2" style="font-size: 18px;padding-top: 16px;text-align: left;color: #EBEEF5"><i class="el-icon-video-camera-solid" style="font-size: 25px;margin-right: 2px;"></i>点播</el-col>
        <el-col :span="2" style="font-size: 18px;padding-top: 16px;text-align: left;color: #EBEEF5"><i class="el-icon-s-data" style="font-size: 25px;margin-right: 2px;"></i>资源</el-col>
        <!-- 登录与注册、用户名 -->
        <el-col :span="8" :offset="4" style="padding-top: 12px;display:table-cell;">
          <!-- user不存在显示 -->
<!--          <el-link :underline="false" @click="toLogin"><span style="font-size: 18px;"><i class="el-icon-user-solid"></i>登录</span></el-link>-->
<!--          <el-link :underline="false"><span style="font-size: 18px;margin-left: 20px;">注册</span></el-link>-->
          <!-- user存在显示 -->
          <img height="40px" :src="this.$http.defaults.baseURL+userInfo.image">
          <span style="color: #EBEEF5;margin-left: 10px;margin-bottom: 10px;position: relative;bottom: 12px">欢迎您：{{userInfo.username}}</span>
          <el-button size="small" type="primary" style="position: relative;bottom: 14px;margin-left: 10px" @click="logOut">退出登录</el-button>
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
  },
  data () {
    return {
      userInfo: {}
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
