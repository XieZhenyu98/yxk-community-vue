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
              <div slot="header">
                <h2>板块列表</h2>
              </div>
              <div style="text-align: left" v-for="item in fatherModule" :key="item.id">
                <h3>{{ item.moduleName }}</h3>
                <el-divider></el-divider>
                <div style="display: flex">
                  <div style="padding-left: 20px;padding-right: 20px" v-for="item2 in item.sonModuleList" :key="item2.id">
                    <el-link @click="toSonModule(item2.id)" target="_blank">{{ item2.moduleName }}</el-link>
                  </div>
                </div>
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
export default {
  name: 'ViewPlate',
  components: {
    Header,
    HeaderNext,
    Foot
  },
  data () {
    return {
      fatherModule: {}
    }
  },
  async created () {
    const { data: res } = (await this.$http.get('fatherModule/select/0/10'))
    this.fatherModule = res.data.records
    console.log(this.fatherModule)
  },
  methods: {
    toSonModule (sonModuleId) {
      this.$router.push({
        path: '/sonModuleDetail',
        query: {
          sonModuleId: sonModuleId
        }
      })
    }
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
