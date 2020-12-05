<template>
  <el-card class="box-card" align="left">
    <div slot="header" class="clearfix">
      <span style="font-size: 14px; color: #303133;">置顶</span>
    </div>
    <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
    <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
  </el-card>
</template>

<script>
export default {
  name: 'Topping',
  data () {
    return {
      tableData: {
        date: '天气真好'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-table{
  width: 100%;
}
.el-card /deep/ .el-card__header {
  padding: 18px 20px;
}
</style>
