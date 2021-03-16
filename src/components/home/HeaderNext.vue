<template>
  <el-row>
    <el-col :span="12" :offset="3">
      <span class="span1"><el-link @click="toHome">首页</el-link></span>
      <span class="span1"><el-link>分享</el-link></span>
      <span class="span1"><el-link>讨论</el-link></span>
      <span class="span1"><el-link>建议</el-link></span>
      <span class="span1"><el-link>公告</el-link></span>
      <span class="span1"><el-link>动态</el-link></span>
      <span class="span1" style="font-size: 14px">|</span>
      <span class="span1"><el-link @click="toUserPublishedList()">我发表的贴</el-link></span>
      <span class="span1"><el-link @click="toUserCollectionList()">我收藏的贴</el-link></span>
    </el-col>
    <el-col :span="6" style="text-align: right;padding-right: 20px;align-items: center">
      <el-link @click="toSearchMore"><i class="el-icon-search" style="font-size: 20px;padding-right: 20px;"></i></el-link>
      <el-button type="primary" size="small" @click="toPublish">发表新帖</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'HeaderNext',
  methods: {
    toPublish () {
      this.$router.push('/publish')
    },
    toHome () {
      this.$router.push('/')
    },
    toUserPublishedList () {
      this.$router.push('/userEdit/userCenter/userPublishedList')
    },
    toUserCollectionList () {
      this.$router.push('/userEdit/userCenter/userCollectionList')
    },
    toSearchMore () {
      this.$router.push('/searchMore')
    }
  }
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
