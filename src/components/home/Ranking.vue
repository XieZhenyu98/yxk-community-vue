<template>
  <el-card class="box-card" align="left">
    <div slot="header" class="clearfix">
      <span>排行榜</span>
    </div>
    <div class="text item">
      <el-row :gutter="12">
        <el-col :key="item.id" :span="8" v-for="item in userListByEx">
          <el-row><a @click.prevent="toPersonal(item.id)" href="#"><img :src="baseUrl+item.image" width="100%"/></a></el-row>
          <el-row style="font-size: 10px"><a @click.prevent="toPersonal(item.id)" href="#">{{ item.username }}</a><br/>活跃度：{{ item.experience }}</el-row>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Ranking',
  data () {
    return {
      baseUrl: '',
      userListByEx: []
    }
  },
  async created () {
    this.baseUrl = this.$http.defaults.baseURL
    const { data: res } = (await this.$http.get('user/userListByEx'))
    this.userListByEx = res.data.records
  },
  methods: {
    toPersonal (value) {
      this.$router.push('/personal?userId=' + value)
    }
  }
}
</script>

<style lang="less" scoped>
.aaa{
  background-color: #488FCE;
}
.el-row{
  text-align: center;
}
</style>
