<template>
  <div>
    <el-card class="box-card" align="left">
      <div slot="header" class="clearfix">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="all">全部动态</el-menu-item>
          <el-submenu :key="item.moduleName+''" :index="item.moduleName+''" v-for="item in menuList">
            <template slot="title">{{ item.moduleName }}</template>
            <el-menu-item :key="itemSon.id" :index="itemSon.id+''" v-for="itemSon in item.sonModuleList">{{ itemSon.moduleName }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
<!--      <DynamicList></DynamicList>-->
      <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
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
      activeIndex: '',
      menuList: []
    }
  },
  methods: {
    handleSelect () {}
  },
  async created () {
    const { data: res } = (await this.$http.get('fatherModule/select/0/10'))
    this.menuList = res.data.records
    console.log(this.menuList)
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
