<template>
  <el-card class="box-card" align="left">
    <div slot="header" class="clearfix">
      <span>热议</span>
    </div>
    <div class="text item">
      <ul class="hot-ul">
        <li><el-link type="danger">中央政法委评望江女孩溺亡事件 <i class="el-icon-chat-dot-round" style="margin-left: 10px;"></i>29</el-link></li>
        <li><el-link type="danger">胡锡进回应特朗普或对台有大动作 <i class="el-icon-chat-dot-round" style="margin-left: 10px;"></i>29</el-link></li>
        <li><el-link type="danger">嫦娥五号上演“月宫之吻” <i class="el-icon-chat-dot-round" style="margin-left: 10px;"></i>29</el-link></li>
        <li><el-link type="danger">重庆永川吊水洞煤矿事故致23死<i class="el-icon-chat-dot-round" style="margin-left: 10px;"></i>29</el-link></li>
        <li><el-link type="danger">中国成功发射高分十四号卫星<i class="el-icon-chat-dot-round" style="margin-left: 10px;"></i>29</el-link></li>
        <li><el-link type="danger">蓬佩奥表示愿与拜登当选团队会面<i class="el-icon-chat-dot-round" style="margin-left: 10px;"></i>29</el-link></li>
      </ul>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Hot'
}
</script>

<style lang="less" scoped>
.el-card /deep/ .el-card__body {
  padding: 0px;
}
.hot-ul {
  li {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
