<template>
  <el-card class="box-card" align="left">
    <div slot="header" class="clearfix">
      <h1>{{ contentDetail.title }}</h1>
      <div>
        <el-row>
          <el-col :span="18">
            <el-tag>{{ sonModuleV.moduleName }}</el-tag>
            <el-tag v-if="contentDetail.topping === 1" type="info">置顶</el-tag>
            <el-tag v-if="contentDetail.marvellous === 1" type="warning">精贴</el-tag>
            <el-tooltip class="item" effect="dark" content="编辑此贴" placement="top">
              <el-button type="primary" icon="el-icon-edit" size="mini" circle></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="加精此贴" placement="top">
              <el-button type="warning" icon="el-icon-star-off" size="mini" circle></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="置顶此贴" placement="top">
              <el-button type="success" icon="el-icon-upload2" size="mini" circle></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除此贴" placement="top">
              <el-button type="danger" icon="el-icon-delete" size="mini" circle></el-button>
            </el-tooltip>
          </el-col>
          <el-col :span="6" align="right" style="padding-top: 10px">
          <span>
            <i class="el-icon-chat-dot-round"></i>
            {{ contentDetail.replyNum }}
            <i class="el-icon-view"></i>
            {{ contentDetail.times }}
          </span>
          </el-col>
        </el-row>
        <el-row style="margin-top: 20px">
          <div style="background-color: #F8F8F8;padding: 10px;">
            <el-row :gutter="10">
              <el-col :span="2">
                <img :src="this.$http.defaults.baseURL+userVo.image" width="100%">
              </el-col>
              <el-col :span="22">
                <el-row style="margin-top: 3px">
                  <el-link style="margin-right: 10px;font-size: 15px">{{ userVo.username }}</el-link>
                  <span style="background-color: red; border-radius: 3px;color: #EBEEF5">VIP{{ userVo.level }}</span>
                  <span style="margin-left: 20px">{{ time.split(" ")[0] }}</span>
                </el-row>
                <el-row style="margin-top: 3px">
                  <el-col>
                    <span style="color: orange;font-size: 12px">悬赏：12飞吻</span>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-row>
      </div>
    </div>
    <div>
      <VueShowdown :markdown="content" flavor="github" :options="{ emoji: true }"></VueShowdown>
    </div>
  </el-card>
</template>

<script>
import Vue from 'vue'
import VueShowdown from 'vue-showdown'
Vue.use(VueShowdown, {
  flavor: 'github',
  options: {
    emoji: false
  }
})
export default {
  name: 'ContentDetail',
  props: ['contentId'],
  data () {
    return {
      contentDetail: {},
      sonModuleV: {},
      content: '',
      userVo: '',
      time: ''
    }
  },
  async created () {
    const { data: res } = (await this.$http.get('content/' + this.$route.query.contentId))
    this.contentDetail = res.data
    this.sonModuleV = res.data.sonModule
    this.content = res.data.content
    this.userVo = res.data.userVo
    this.time = res.data.time.split(' ')[0]
  }
}
</script>

<style lang="less" scoped>
.el-tag{
  margin-right: 10px;
}
i {
  &:last-child{
    padding-left: 20px;
  }
}
</style>
