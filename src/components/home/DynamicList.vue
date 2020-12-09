<template>
  <el-row :gutter="6">
    <el-col :span="3">
      <img :src="this.$http.defaults.baseURL+dyItem.userVo.image" width="100%">
    </el-col>
    <el-col :span="21" class="margin-bottom-col">
      <el-row :gutter="2" align="bottom">
        <el-col :span="24"><span><el-tag size="small" style="margin-right: 10px;margin-left: 5px">{{ dyItem.sonModule.moduleName }}</el-tag><el-link @click="toDetail">{{dyItem.title}}</el-link></span></el-col>
      </el-row>
      <el-row :gutter="2" align="bottom">
        <el-col :span="3">{{dyItem.userVo.username}}</el-col>
        <el-col :span="3"><span style="background-color: orange; border-radius: 3px;color: #EBEEF5">VIP{{dyItem.userVo.level}}</span></el-col>
        <el-col :span="5">{{ dyItem.time.split(" ")[0] }}</el-col>
        <el-col :span="3"><i class="el-icon-sugar"></i> {{ dyItem.money }}</el-col>
        <el-col :span="3" :offset="7"><span><i class="el-icon-chat-dot-round"></i> {{ dyItem.replyNum }}</span></el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'DynamicList',
  props: ['dyItem'],
  methods: {
    async toDetail () {
      // await this.$router.push('/detail/' + this.dyItem.id)
      await this.$router.push({
        path: '/detail', query: { contentId: this.dyItem.id }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.margin-bottom-col {
  .el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
    &:first-child {
      margin-top: 10px;
    }
  }
}
</style>
