<template>
  <div>
    <el-card class="box-card" align="left">
      <div slot="header" class="clearfix">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">全部动态</el-menu-item>
          <el-submenu index="2">
            <template slot="title">大学</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <DynamicList></DynamicList>
      <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
      <DynamicList></DynamicList>
      <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
      <DynamicList></DynamicList>
      <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
      <DynamicList></DynamicList>
      <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
      <DynamicList></DynamicList>
      <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
      <DynamicList></DynamicList>
      <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
      <DynamicList></DynamicList>
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
      activeIndex: ''
    }
  },
  methods: {
    handleSelect () {}
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
