<template>
  <el-card align="left">
    <h3>最近的回答</h3>
    <el-divider></el-divider>
    <el-row v-for="item in replyList" :key="item.id">
      <span style="font-size: 15px;color: #B3B3B2;margin-left: 5px">{{ item.time }}时在 </span>
      <span><a style="color: #488FCE" href="#" @click.prevent="toContentDetail(item.contentDo.id)">{{ item.contentDo.title }}</a> <span style="font-size: 15px;color: #B3B3B2;margin-left: 5px">回答</span></span><br/>
      <el-col style="background-color: #F2F2F5">
        <span>{{ item.content }}</span>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'RecentAnswers',
  data () {
    return {
      replyList: [],
      userId: this.$route.query.userId
    }
  },
  async created () {
    const { data: res } = (await this.$http.get('reply/select/personal/' + this.userId + '/0/10'))
    console.log(res.data)
    this.replyList = res.data
  },
  methods: {
    toContentDetail (value) {
      this.$router.push('/detail?contentId=' + value)
    }
  }
}
</script>

<style lang="less" scoped>
.el-row{
  margin-bottom: 10px;
}
.el-col{
  padding: 10px 10px;
  border-radius: 6px;
}
</style>
