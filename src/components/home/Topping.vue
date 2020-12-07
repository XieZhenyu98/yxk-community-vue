<template>
  <el-card class="box-card" align="left">
    <div slot="header" class="clearfix">
      <span style="font-size: 14px; color: #303133;">置顶</span>
    </div>
    <div :key="item.id" v-for="item in topList">
      <DynamicList :dyItem="item"></DynamicList>
      <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
    </div>
  </el-card>
</template>

<script>

import DynamicList from '@/components/home/DynamicList'

export default {
  name: 'Topping',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    DynamicList
  },
  data () {
    return {
      tableData: {
        date: '天气真好'
      },
      topList: []
    }
  },
  async created () {
    const { data: res } = (await this.$http.get('content/listOfTop'))
    this.topList = res.data
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
