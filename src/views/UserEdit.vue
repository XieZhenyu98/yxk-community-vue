<template>
  <el-container>
    <!-- 头部 -->
    <el-header height="60px" class="header-home">
      <Header></Header>
    </el-header>
    <!-- 主体 -->
    <el-main>
      <!-- 中间主要内容 -->
      <el-row style="width: 100%">
        <!-- 第一行 -->
        <HeaderNext></HeaderNext>
        <el-row style="margin-top: 10px">
          <el-col :span="18" :offset="3">
            <el-container>
              <el-aside width="200px" style="height: 300px;background-color: #545c64;border-radius: 3px">
                <el-menu
                  :default-active="selectActive+''"
                  class="el-menu-vertical-demo"
                  background-color="#545c64"
                  text-color="#fff"
                  @select="selectItem"
                  active-text-color="#ffd04b">
                  <el-menu-item index="1">我的主页</el-menu-item>
                  <el-menu-item index="2">用户中心</el-menu-item>
                  <el-menu-item index="3">基本设置</el-menu-item>
                  <el-menu-item index="4">我的消息</el-menu-item>
                </el-menu>
              </el-aside>
              <el-main>
                <el-card style="width: 95%">
                  <router-view></router-view>
                </el-card>
              </el-main>
            </el-container>
          </el-col>
        </el-row>
        <Foot></Foot>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Header from '@/components/home/Header'
import HeaderNext from '@/components/home/HeaderNext'
import Foot from '@/components/home/Foot'
export default {
  name: 'UserEdit',
  components: { Foot, HeaderNext, Header },
  data () {
    return {
      userInfo: {},
      selectActive: 3,
      path: ''
    }
  },
  created () {
    this.path = this.$route.path
    switch (this.path) {
      case '/userEdit/userCenter/userPublishedList':
        this.selectActive = 2
        break
      case '/userEdit/userCenter/userCollectionList':
        this.selectActive = 2
        break
      case '/userEdit/userMessage':
        this.selectActive = 4
    }
    if (JSON.parse(window.sessionStorage.getItem('user')) == null) {
      this.$message.error('请登录后再进入个人设置')
      this.$router.push('/login')
    } else {
      this.userInfo = JSON.parse(window.sessionStorage.getItem('user'))
    }
  },
  methods: {
    selectItem (key) {
      switch (key) {
        case '1':
          this.$router.push('/personal?userId=' + this.userInfo.id)
          break
        case '2':
          this.selectActive = 2
          this.$router.push('/userEdit/userCenter/userPublishedList')
          break
        case '3':
          this.selectActive = 3
          this.$router.push('/userEdit/basicSetting')
          break
        case '4':
          this.selectActive = 4
          this.$router.push('/userEdit/userMessage')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header-home{
  vertical-align: center;
  horiz-align: center;
}
.el-container{
  height: 100%;
  > .el-header{
    background-color: #393D49;
  }
  > .el-footer{
    background-color: #488FCE;
  }
}

.el-main {
  display: flex;
  justify-content: center;
  background-color: #F2F2F2;
  padding: 0;
}
.el-menu {
  border-right:0!important;
}
</style>
