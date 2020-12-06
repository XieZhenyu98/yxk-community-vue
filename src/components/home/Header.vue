<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <el-row>
        <el-col :span="2"><img src="../../assets/user.jpg" height="60px"/></el-col>
        <el-col :span="2" align="center"><h3>以轩库社区</h3></el-col>
        <el-col :span="6" :offset="10">登录退出</el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="less" scoped>
</style>
