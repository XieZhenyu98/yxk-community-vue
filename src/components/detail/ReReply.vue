<template>
<el-row style="background-color: #F8F8F8;width:36%;border-radius: 3px">
  <el-row style="margin-top: 10px;" :key="item.id" v-for="(item,index) in this.reply">
    <el-row>
      <el-col>
        <el-link @click.prevent="toPersonal(item.userVo.id)" :underline="true" type="primary" style="font-size: 16px">{{ item.userVo.username }}</el-link>
        <span v-if="item.replyVo != null">回复
          <el-link @click.prevent="toPersonal(item.replyVo.userVo.id)" :underline="true" type="primary" style="font-size: 16px">{{ item.replyVo.userVo.username }}</el-link>
        </span>
        ：
        {{ item.content }}
      </el-col>
    </el-row>
    <el-row>
      <el-col align="right">
        <span style="font-size: 14px;margin-right: 12px">{{ item.time }}</span>
        <el-link @click="doSupportFun(item.id,index)" :underline="true" type="primary" style="font-size: 20px;margin-right: 12px"><i class="el-icon-ice-tea"></i><span style="font-size: 16px;">({{ supportNum[index] }})</span></el-link>
        <el-link @click="open(item.fatherReplyId,item.id)" :underline="true" type="primary" style="font-size: 20px;margin-right: 6px"><i class="el-icon-chat-dot-round"></i></el-link>
      </el-col>
    </el-row>
  </el-row>
</el-row>
</template>

<script>
export default {
  name: 'ReReply',
  props: ['replyItem'],
  async created () {
    const { data: res } = (await this.$http.get('reply/list/re/' + this.replyItem.contentId + '/' + this.replyItem.id + '/0/10'))
    for (const item in res.data.records) {
      this.supportNum[item] = (await this.$http.get('support/reply/count/' + res.data.records[item].id)).data.data
    }
    this.reply = res.data.records
  },
  data () {
    return {
      reply: [],
      doReply: {
        contentId: this.$route.query.contentId,
        quoteId: null,
        content: '',
        userId: -1,
        fatherReplyId: null
      },
      support: 0,
      supportNum: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      doSupport: {
        replyId: null,
        userId: null
      }
    }
  },
  methods: {
    open (value, value2) {
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
              this.doReply.fatherReplyId = value
              this.doReply.quoteId = value2
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
      const { data: res } = (await this.$http.get('reply/list/re/' + this.replyItem.contentId + '/' + this.replyItem.id + '/0/10'))
      this.reply = res.data.records
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
  }
}
</script>

<style lang="less" scoped>

</style>
