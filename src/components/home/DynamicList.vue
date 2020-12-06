<template>
  <el-row :gutter="6">
    <el-col :span="3">
      <img src="../../assets/user.jpg" width="100%">
    </el-col>
    <el-col :span="21" class="margin-bottom-col">
      <el-row :gutter="2" align="bottom">
        <el-col :span="3"><el-tag size="small">大学</el-tag></el-col>
        <el-col :span="21"><span> 基于 layui 的极简社区页面模版</span></el-col>
      </el-row>
      <el-row :gutter="2" align="bottom">
        <el-col :span="3">闲心</el-col>
        <el-col :span="3"><span style="background-color: orange; border-radius: 3px;color: #EBEEF5">VIP11</span></el-col>
        <el-col :span="5">2017-11-30</el-col>
        <el-col :span="3"><i class="el-icon-sugar"></i> 60</el-col>
        <el-col :span="3" :offset="7"><span><i class="el-icon-chat-dot-round"></i> 299</span></el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'DynamicList'
}
</script>

<style lang="less" scoped>
.margin-bottom-col {
  .el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
    &:first-child {
      margin-top: 10px;
    }
  }
}
</style>
