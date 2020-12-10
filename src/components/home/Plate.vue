<template>
  <div>
    <el-card class="box-card" align="left">
      <div slot="header" class="clearfix">
        <el-menu @select="handleSelect" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item :key="0" index="all">全部动态</el-menu-item>
          <el-submenu :key="item.moduleName+''" :index="item.moduleName+''" v-for="item in menuList">
            <template slot="title">{{ item.moduleName }}</template>
            <el-menu-item :key="itemSon.id" :index="itemSon.id+''" v-for="itemSon in item.sonModuleList">{{ itemSon.moduleName }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div :key="content.id" v-for="content in contentList">
        <DynamicList :dyItem="content"></DynamicList>
        <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
      </div>
    </el-card>
  </div>
</template>

<script>
import DynamicList from '@/components/home/DynamicList'
export default {
  name: 'Plate',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    DynamicList
  },
  data () {
    return {
      activeIndex: 'all',
      menuList: [],
      module_id: 11111,
      contentList: [],
      loading: true
    }
  },
  methods: {
    async handleSelect (key) {
      console.log('key' + key)
      if (key === 'all') {
        const { data: resPate } = (await this.$http.get('content/0/10'))
        this.contentList = resPate.data.records
      } else {
        const { data: resPate } = (await this.$http.get('content/0/5/' + key))
        this.contentList = resPate.data.records
      }
    }
  },
  async created () {
    this.loading = true
    const { data: res } = (await this.$http.get('fatherModule/select/0/10'))
    const { data: resPate } = (await this.$http.get('content/0/10'))
    this.contentList = resPate.data.records
    this.menuList = res.data.records
    this.loading = false
  }
}
</script>

<style lang="less" scoped>
.el-card /deep/ .el-card__header {
  padding: 18px 20px;
  border-bottom: 0px;
  box-sizing: border-box;
}
</style>
