<template>
  <el-card class="box-card" align="left">
    <el-divider><h1>回帖</h1></el-divider>
    <div :key="item.id" v-for="(item, index) in getReply">
      <el-row :gutter="10">
        <el-col :span="2">
          <a href="#" @click.prevent="toPersonal(item.userVo.id)"><img :src="'http://127.0.0.1:8888'+item.userVo.image" width="100%"></a>
        </el-col>
        <el-col :span="22">
          <el-row style="margin-top: 3px">
            <el-link style="margin-right: 10px;font-size: 15px"><a href="#" @click.prevent="toPersonal(item.userVo.id)">{{ item.userVo.username }}</a></el-link>
            <span style="background-color: red; border-radius: 3px;color: #EBEEF5;margin-right: 20px">VIP{{ item.userVo.level }}</span>
            <span style="">(楼主)</span>
          </el-row>
          <el-row style="margin-top: 3px;margin-top: 10px">
            <el-col>
              <span style="">{{ item.time }}</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px">{{ item.content }}</el-row>
      <!-- 评论内容 -->
      <ReReply :replyItem="item"></ReReply>
      <el-row>
        <el-col align="right">
          <el-link @click="doSupportFun(item.id,index)" style="font-size: 16px;margin-top: 16px;margin-right: 16px" type="primary">鼓励 <i class="el-icon-ice-tea"></i><span>({{ supportNum[index] }})</span></el-link>
          <el-link @click="open(item.id)" style="font-size: 16px;margin-top: 16px" type="primary">说一句 <i class="el-icon-chat-dot-round"></i></el-link>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </div>

  </el-card>
</template>

<script>
import ReReply from '@/components/detail/ReReply'
export default {
  name: 'Reply',
  components: { ReReply },
  props: ['contentUserId'],
  data () {
    return {
      doReply: {
        contentId: this.$route.query.contentId,
        quoteId: null,
        content: '',
        userId: -1,
        fatherReplyId: null
      },
      getReply: [],
      supportNum: [],
      supportNumBo: [],
      doSupport: {
        userId: null,
        replyId: null
      }
    }
  },
  methods: {
    open (value) {
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
              this.doReply.userId = this.doReply.userId = JSON.parse(window.sessionStorage.getItem('user')).id
              this.doReply.fatherReplyId = value
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
      const { data: res } = (await this.$http.get('reply/list/' + this.doReply.contentId + '/' + '0/10'))
      this.getReply = res.data.records
      this.$router.go(0)
    },
    onCommentInputChange () {
      this.commentContent = document.getElementById('commentContent').value
    },
    async doSupportFun (replyId, index) {
      this.doSupport.replyId = replyId
      this.doSupport.userId = JSON.parse(window.sessionStorage.getItem('user')).id
      const { data: res } = await this.$http.put('support/reply', this.doSupport)
      if (res.data === 0) {
        this.supportNum[index] = this.supportNum[index] - 1
        this.$message.error('取消鼓励!')
      } else {
        this.supportNum[index] = this.supportNum[index] + 1
        this.$message.success('鼓励成功！')
      }
      this.$forceUpdate()
    },
    toPersonal (value) {
      this.$router.push('/personal?userId=' + value)
    }
  },
  async created () {
    const { data: res } = (await this.$http.get('reply/list/' + this.doReply.contentId + '/' + '0/10'))
    // eslint-disable-next-line no-unused-vars
    for (const item in res.data.records) {
      this.supportNum[item] = (await this.$http.get('support/reply/count/' + res.data.records[item].id)).data.data
    }
    this.getReply = res.data.records
  }
}
</script>

<style lang="less" scoped>

</style>
