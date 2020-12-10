<template>
  <el-container>
    <!-- 头部 -->
    <el-header height="60px" class="header-detail">
      <Header></Header>
    </el-header>
    <!-- 主体 -->
    <el-main>
      <el-row style="width: 100%">
        <!-- 第一行 -->
        <HeaderNext></HeaderNext>
        <el-row :gutter="20">
          <el-col :span="12" :offset="3">
            <el-row>
              <ContentDetail :contentId="contentId"></ContentDetail>
            </el-row>
            <el-row>
              <Reply></Reply>
            </el-row>
          </el-col>
          <el-col :span="6">
            <!-- 热议 -->
            <el-row>
              <Hot></Hot>
            </el-row>
            <!-- 广告 -->
            <el-row>
              <Advertisement></Advertisement>
            </el-row>
            <!-- 公众号 -->
            <el-row>
              <WeChat></WeChat>
            </el-row>
          </el-col>
        </el-row>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Vue from 'vue'
import HeaderNext from '@/components/home/HeaderNext'
import Header from '@/components/home/Header'
import Hot from '@/components/home/Hot'
import Advertisement from '@/components/home/Advertisement'
import ContentDetail from '@/components/detail/ContentDetail'
import VueShowdown from 'vue-showdown'
import Reply from '@/components/detail/Reply'
import WeChat from '@/components/detail/WeChat'
Vue.use(VueShowdown)
export default {
  name: 'Detail',
  components: {
    WeChat,
    Reply,
    ContentDetail,
    Advertisement,
    Hot,
    HeaderNext,
    Header
  },
  data () {
    return {
      contentId: 1
    }
  }
}
</script>

<style lang="less" scoped>
.header-detail{
  vertical-align: center;
  horiz-align: center;
}
.el-container{
  height: 100%;
  > .el-header{
    background-color: #393D49;
  }
  > .el-footer{
    background-color: #488FCE;
  }
}
.el-main {
  display: flex;
  justify-content: center;
  background-color: #F2F2F2;
  padding: 0;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
