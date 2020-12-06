<template>
  <el-card class="box-card" align="left">
    <div slot="header" class="clearfix">
      <span>温馨通道</span>
    </div>
    <div class="text item">
      <ul class="warm-ul">
        <li><el-link type="primary">el 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</el-link></li>
        <li><el-link type="primary">el 常见问题的处理和实用干货集锦</el-link></li>
        <li><el-link type="primary">el 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</el-link></li>
        <li><el-link type="primary">el 常见问题的处理和实用干货集锦</el-link></li>
        <li><el-link type="primary">el 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</el-link></li>
      </ul>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'WarmChannle'
}
</script>

<style lang="less" scoped>
.el-card /deep/ .el-card__body {
  padding: 0px;
}
.warm-ul {
  li{
    margin-bottom: 10px;
      &:last-child{
        margin-bottom: 0;
      }
  }
}
</style>
