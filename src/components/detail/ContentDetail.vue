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
                <a href="#" @click.prevent="toPersonal(userVo.id)"><img :src="this.$http.defaults.baseURL+userVo.image" width="100%"></a>
              </el-col>
              <el-col :span="22">
                <el-row style="margin-top: 3px">
                  <el-link style="margin-right: 10px;font-size: 15px"><a href="#" @click.prevent="toPersonal(userVo.id)">{{ userVo.username }}</a></el-link>
                  <span style="background-color: red; border-radius: 3px;color: #EBEEF5">VIP{{ userVo.level }}</span>
                  <span style="margin-left: 20px">{{ time.split(" ")[0] }}</span>
                </el-row>
                <el-row style="margin-top: 3px">
                  <el-col>
                    <span style="color: orange;font-size: 12px">悬赏：{{ contentDetail.money }}飞吻</span>
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
    <el-row>
      <el-col align="center" style="font-size: 26px">
        <a href="#" @click.prevent="doSupportFun()"><i class="el-icon-thumb"></i><span style="font-size: 26px">({{ supportNum }})</span></a>
        <a href="#" style="margin-left: 16px;margin-right: 16px;"><i class="el-icon-star-off"></i><span style="font-size: 26px">({{ collectionNum }})</span></a>
        <a href="#"><i class="el-icon-share"></i><span style="font-size: 26px">(0)</span></a>
      </el-col>
      <el-col align="right" style="font-size: 26px">
        <a href="#" @click.prevent="open()"><i class="el-icon-chat-dot-round"></i><span style="font-size: 16px">说一句</span></a>
      </el-col>
    </el-row>
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
      time: '',
      doReply: {
        contentId: this.$route.query.contentId,
        content: null,
        userId: 1
      },
      doSupport: {
        contentId: this.$route.query.contentId,
        userId: 1
      },
      supportNum: 0,
      collectionNum: 0
    }
  },
  async created () {
    const { data: res } = (await this.$http.get('content/' + this.$route.query.contentId))
    this.contentDetail = res.data
    this.sonModuleV = res.data.sonModule
    this.content = res.data.content
    this.userVo = res.data.userVo
    this.time = res.data.time.split(' ')[0]
    this.supportNum = (await this.$http.get('support/content/count/' + this.doSupport.contentId)).data.data
  },
  methods: {
    open () {
      const _this = this
      const h = _this.$createElement
      _this.$msgbox({
        title: '说一句',
        message: h('div', {
          attrs: {
            class: 'el-textarea'
          }
        }, [
          h('textarea', {
            attrs: {
              class: 'el-textarea__inner',
              autocomplete: 'off',
              rows: 4,
              id: 'commentContent'
            },
            value: _this.commentContent,
            on: { input: _this.onCommentInputChange }
          })
        ]),
        showCancelButton: true,
        confirmButtonText: '评论',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            if (JSON.parse(window.sessionStorage.getItem('user')) === null) {
              this.$message.error('请先登录再评论')
            } else {
              this.doReply.userId = JSON.parse(window.sessionStorage.getItem('user')).id
              instance.confirmButtonLoading = true
              instance.confirmButtonText = '评论中...'
              this.doReply.content = _this.commentContent
              this.doReplyFunc()
              instance.confirmButtonLoading = false
              this.$message.success('评论成功')
            }
            done()
          } else {
            done()
          }
        }
      }).then(action => {
      })
    },
    async doReplyFunc () {
      await this.$http.post('reply/add', this.doReply)
      this.$router.go(0)
    },
    onCommentInputChange () {
      this.commentContent = document.getElementById('commentContent').value
    },
    async doSupportFun () {
      this.doSupport.userId = JSON.parse(window.sessionStorage.getItem('user')).id
      const { data: res } = await this.$http.put('support/content', this.doSupport)
      if (res.data === 0) {
        this.supportNum = this.supportNum - 1
        this.$message.error('取消鼓励!')
      } else {
        this.supportNum = this.supportNum + 1
        this.$message.success('鼓励成功！')
      }
      this.$forceUpdate()
    },
    toPersonal (value) {
      this.$router.push('/personal?userId=' + value)
    }
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
