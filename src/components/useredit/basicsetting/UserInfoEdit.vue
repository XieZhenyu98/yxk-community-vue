<template>
  <div>
    <el-form style="margin-top: 20px" align="left">
      <el-input placeholder="请输入内容" v-model="formData.email">
        <template slot="prepend">邮箱</template>
      </el-input>
      <el-input placeholder="请输入内容" v-model="formData.username">
        <template slot="prepend">昵称</template>
      </el-input>
      <el-input placeholder="请输入内容" v-model="formData.city">
        <template slot="prepend">城市</template>
      </el-input>
      <template>
        <el-radio v-model="formData.sex" :label="1">男</el-radio>
        <el-radio v-model="formData.sex" :label="0">女</el-radio>
      </template>
      <el-input
        style="margin-top: 10px;"
        type="textarea"
        :rows="2"
        placeholder="签名"
        v-model="formData.personalSignature">
      </el-input>
      <el-button @click="doUpdate" style="margin-top: 10px" type="primary" round>提交修改</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UserInfoEdit',
  async created () {
    this.userInfo = JSON.parse(window.sessionStorage.getItem('user'))
    const { data: res } = await this.$http.get('user/' + this.userInfo.id)
    this.formData = res.data
  },
  data () {
    return {
      userInfo: {},
      formData: {
        email: '',
        username: '',
        city: '',
        sex: 0,
        personalSignature: ''
      }
    }
  },
  methods: {
    async doUpdate () {
      const { data: res } = (await this.$http.put('user/update', this.formData))
      if (res.code === 0) {
        this.$message.success(res.message)
      } else {
        this.$message.error(res.message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-input{
  margin-bottom: 10px;
}
</style>
