<template>
  <el-card align="left">
    <h3>最近的提问</h3>
    <el-divider></el-divider>
    <el-row v-for="item in contentList" :key="item.id">
      <span><a href="#" @click.prevent="toContentDetail(item.id)">{{ item.title }}</a></span>
      <span style="font-size: 15px;color: #B3B3B2;margin-left: 5px">{{ item.time }}</span>
      <span style="float: right">阅读数：{{ item.times }}</span>
      <el-divider></el-divider>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'RecentQuestions',
  data () {
    return {
      userId: this.$route.query.userId,
      contentList: []
    }
  },
  async created () {
    const { data: res } = (await this.$http.get('content/select/user/' + this.userId + '/0/10'))
    this.contentList = res.data.records
  },
  methods: {
    toContentDetail (value) {
      this.$router.push('/detail?contentId=' + value)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
