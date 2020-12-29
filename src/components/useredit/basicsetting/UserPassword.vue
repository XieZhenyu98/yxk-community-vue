<template>
  <div>
    <el-form style="margin-top: 20px" align="left">
      <el-input type="password" placeholder="请输入内容" v-model="fromData.password">
        <template slot="prepend">当前密码</template>
      </el-input>
      <el-input type="password" placeholder="请输入内容" v-model="fromData.username">
        <template slot="prepend">新的密码</template>
      </el-input>
      <el-input type="password" placeholder="请输入内容" v-model="confirmExperience">
        <template slot="prepend">确认密码</template>
      </el-input>
      <el-button @click="doUpdatePassword" type="primary" round>提交修改</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UserPassword',
  data () {
    return {
      userInfo: {},
      fromData: {
        id: 1,
        password: '',
        username: '',
        email: ''
      },
      confirmExperience: ''
    }
  },
  methods: {
    async doUpdatePassword () {
      this.userInfo = JSON.parse(window.sessionStorage.getItem('user'))
      this.fromData.id = this.userInfo.id
      this.fromData.email = this.userInfo.email
      if (this.confirmExperience === this.fromData.username) {
        const { data: res } = (await this.$http.put('user/updatePassword', this.fromData))
        if (res.code === -1) {
          this.$message.error(res.message)
        } else {
          this.$message.success('修改成功')
        }
      } else {
        this.$message.error('您输入两次的密码不一样')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-input{
  margin-bottom: 20px;
}
</style>
