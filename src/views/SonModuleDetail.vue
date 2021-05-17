<template>
  <el-container>
    <!-- 头部 -->
    <el-header height="60px" class="header-home">
      <Header></Header>
    </el-header>
    <!-- 主体 -->
    <!-- 第一行 -->
    <HeaderNext></HeaderNext>
    <el-main>
      <div style="width: 100%;margin-top: 20px">
        <el-row>
          <el-col :span="18" :offset="3">
            <el-card class="box-card">
              <div>
                <h1>{{sonModule.moduleName}}</h1>
                <p>{{sonModule.info}}</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin-top: 20px">
          <el-col :span="18" :offset="3">
            <el-card class="box-card">
              <div>
                <span v-if="sonModuleDetails.length == 0">暂无数据...</span>
              </div>
              <div style="text-align: left" v-for="item in sonModuleDetails" :key="item.id">
                <DynamicList :dyItem="item"></DynamicList>
                <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
              </div>
            </el-card>
          </el-col>
        </el-row>
        <Foot></Foot>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Header from '@/components/home/Header'
import HeaderNext from '@/components/home/HeaderNext'
import Foot from '@/components/home/Foot'
import DynamicList from '@/components/home/DynamicList'
export default {
  name: 'SonModuleDetail',
  components: {
    Header,
    HeaderNext,
    Foot,
    DynamicList
  },
  data () {
    return {
      sonModuleId: 1,
      sonModule: {},
      sonModuleDetails: []
    }
  },
  async created () {
    if (this.$route.query.sonModuleId === '' || this.$route.query.sonModuleId == null) {
      this.$message.error('参数有误')
    }
    this.sonModuleId = this.$route.query.sonModuleId
    const { data: res } = (await this.$http.get('sonModule/' + this.sonModuleId))
    this.sonModule = res.data
    const { data: res1 } = (await this.$http.get('content/0/100/' + this.sonModuleId))
    this.sonModuleDetails = res1.data.records
  }
}
</script>

<style lang="less" scoped>
.header-home{
  vertical-align: center;
  horiz-align: center;
}
.el-container{
  height: 100%;
  > .el-header{
    background-color: #393D49;
  }
  > .el-footer{
    background-color: #488FCE;
  }
}

.el-main {
  display: flex;
  justify-content: center;
  background-color: #F2F2F2;
  padding: 0;
}

</style>
