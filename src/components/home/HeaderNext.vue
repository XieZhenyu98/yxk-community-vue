<template>
  <el-row>
    <el-col :span="12" :offset="3">
      <span class="span1">首页</span>
      <span class="span1">分享</span>
      <span class="span1">讨论</span>
      <span class="span1">建议</span>
      <span class="span1">公告</span>
      <span class="span1">动态</span>
      <span class="span1">|</span>
      <span class="span1">我发表的贴</span>
      <span class="span1">我收藏的贴</span>
    </el-col>
    <el-col :span="6" style="text-align: right;padding-right: 20px;align-items: center">
      <i class="el-icon-search" style="font-size: 20px;padding-right: 20px;"></i>
      <el-button type="primary" size="small">发表新帖</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'HeaderNext'
}
</script>

<style lang="less" scoped>
.el-row {
  display: flex;
  align-items: center;
  text-align: left;
  height: 46px;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
}
.span1 {
  margin-left: 10px;
  margin-right: 20px;
}
</style>
