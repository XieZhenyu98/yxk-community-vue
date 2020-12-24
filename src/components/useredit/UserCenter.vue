<template>
  <el-row>
    <el-menu :default-active="activeIndex+''" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">我发表的贴</el-menu-item>
      <el-menu-item index="2">我收藏的贴</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </el-row>
</template>

<script>
export default {
  name: 'UserCenter',
  data () {
    return {
      activeIndex: 1,
      key: 1
    }
  },
  created () {
    if (this.$route.path === '/userEdit/userCenter/userCollectionList') {
      this.activeIndex = 2
    }
  },
  methods: {
    handleSelect (value) {
      this.activeIndex = value
      switch (value) {
        case '1':
          this.$router.push('/userEdit/userCenter/userPublishedList')
          break
        case '2':
          this.$router.push('/userEdit/userCenter/userCollectionList')
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
