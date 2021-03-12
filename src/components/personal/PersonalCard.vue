<template>
  <el-card>
    <el-row>
      <el-col :span="4" :offset="10">
        <img :src="baseUrl+user.image" width="100%"/>
      </el-col>
      <el-col>
        <span style="font-size: 26px">{{ user.username }}</span>
        <i class="el-icon-male" style="color: #488FCE;font-size: 24px"></i>
        <i class="el-icon-female" style="color: red;font-size: 24px"></i>
        <span style="color: #EBEEF5;background-color: orange;border-radius: 3px">VIP{{ user.level }}</span>
      </el-col>
      <el-col v-if="user.authentication != null">
        <span style="color: #55a532;font-size: 16px">认证信息:{{ user.authentication }}</span>
      </el-col>
      <el-col>
        <i class="el-icon-apple"></i>钻石:{{ user.diamonds }}
        <span style="color: #a3a6a7"><i class="el-icon-time"></i>{{ user.joiningTime }}加入</span>
        <span style="color: #a3a6a7"><i class="el-icon-map-location"></i>来自{{ user.city }}</span>
      </el-col>
      <el-col>
        <span style="color: #a3a6a7">{{ user.personalSignature }}</span>
      </el-col>
      <el-col>
        <el-button>加为好友</el-button>
        <el-button type="primary">发起会话</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'PersonalCard',
  data () {
    return {
      baseUrl: '',
      userId: this.$route.query.userId,
      user: {
      }
    }
  },
  async created () {
    this.baseUrl = this.$http.defaults.baseURL
    const { data: res } = (await this.$http.get('user/' + this.userId))
    this.user = res.data
    this.user.joiningTime = this.user.joiningTime.split(' ')[0]
  }
}
</script>

<style lang="less" scoped>
.el-col{
  margin-bottom: 6px;
}
</style>
