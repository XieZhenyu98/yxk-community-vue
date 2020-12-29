<template>
  <div>
    <el-menu :default-active="activeIndex+''" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">我的资料</el-menu-item>
      <el-menu-item index="2">头像</el-menu-item>
      <el-menu-item index="3">密码</el-menu-item>
      <el-menu-item index="4">帐号绑定</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BasicSettings',
  data () {
    return {
      activeIndex: 1
    }
  },
  methods: {
    handleSelect (value) {
      this.activeIndex = value
      switch (value) {
        case '1':
          this.$router.push('/userEdit/basicSetting/userInfoEdit')
          break
        case '2':
          this.$router.push('/userEdit/basicSetting/userImage')
          break
        case '3':
          this.$router.push('/userEdit/basicSetting/userPassword')
          break
        case '4':
          this.$router.push('/userEdit/basicSetting/userBind')
      }
    }
  },
  created () {
    if (this.$route.path === '/userEdit/basicSetting/userImage') {
      this.activeIndex = 2
    } else if (this.$route.path === '/userEdit/basicSetting/userPassword') {
      this.activeIndex = 3
    } else if (this.$route.path === '/userEdit/basicSetting/userBind') {
      this.activeIndex = 4
    }
  }
}
</script>

<style lang="less" scoped>

</style>
