<template>
  <el-container>
    <!-- 头部 -->
    <el-header height="60px" class="header-home">
      <Header></Header>
    </el-header>
    <!-- 主体 -->
    <el-main>
      <!-- 中间主要内容 -->
      <el-row style="width: 100%">
          <!-- 第一行 -->
        <HeaderNext></HeaderNext>
        <el-row>
          <el-col :span="18" class="topping-col" :offset="3">
            <PersonalCard></PersonalCard>
          </el-col>
        </el-row>
      </el-row>

    </el-main>
  </el-container>
</template>

<script>
import Header from '@/components/home/Header'
import HeaderNext from '@/components/home/HeaderNext'
import PersonalCard from '@/components/personal/PersonalCard'
export default {
  name: 'Personal',
  components: {
    PersonalCard,
    HeaderNext,
    Header
  },
  async created () {
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

.bg-purple{
  background-color: #2c3e50;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.bottom-row {
  .el-col {
    margin-bottom: 30px;
  }
}
</style>
