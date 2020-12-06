<template>
  <el-card class="box-card" align="left">
    <div slot="header" class="clearfix">
      <span>友情链接</span>
    </div>
    <div class="text item">
      <el-row :gutter="5">
        <el-col :span="6">百度</el-col>
        <el-col :span="6">新浪</el-col>
        <el-col :span="6">码云</el-col>
        <el-col :span="6">Github</el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Links'
}
</script>

<style lang="less" scoped>

</style>
