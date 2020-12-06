<template>
  <el-card class="box-card" align="left">
    <div slot="header" class="clearfix">
      <span>排行榜</span>
    </div>
    <div class="text item">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-row><img src="../../assets/user.jpg" width="100%"/></el-row>
          <el-row style="font-size: 10px">闲心<br/>活跃度：30</el-row>
        </el-col>
        <el-col :span="8">
          <el-row><img src="../../assets/user.jpg" width="100%"/></el-row>
          <el-row style="font-size: 10px">闲心<br/>活跃度：30</el-row>
        </el-col>
        <el-col :span="8">
          <el-row><img src="../../assets/user.jpg" width="100%"/></el-row>
          <el-row style="font-size: 10px">闲心<br/>活跃度：30</el-row>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-row><img src="../../assets/user.jpg" width="100%"/></el-row>
          <el-row style="font-size: 10px">闲心<br/>活跃度：30</el-row>
        </el-col>
        <el-col :span="8">
          <el-row><img src="../../assets/user.jpg" width="100%"/></el-row>
          <el-row style="font-size: 10px">闲心<br/>活跃度：30</el-row>
        </el-col>
        <el-col :span="8">
          <el-row><img src="../../assets/user.jpg" width="100%"/></el-row>
          <el-row style="font-size: 10px">闲心<br/>活跃度：30</el-row>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-row><img src="../../assets/user.jpg" width="100%"/></el-row>
          <el-row style="font-size: 10px">闲心<br/>活跃度：30</el-row>
        </el-col>
        <el-col :span="8">
          <el-row><img src="../../assets/user.jpg" width="100%"/></el-row>
          <el-row style="font-size: 10px">闲心<br/>活跃度：30</el-row>
        </el-col>
        <el-col :span="8">
          <el-row><img src="../../assets/user.jpg" width="100%"/></el-row>
          <el-row style="font-size: 10px">闲心<br/>活跃度：30</el-row>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Ranking'
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
