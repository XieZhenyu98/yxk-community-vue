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
        <el-row :gutter="20">
            <el-card style="width: 80%">
              <span>sss</span>
            </el-card>
        </el-row>
        <!-- 第三行底部 -->
        <Foot></Foot>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Header from '@/components/home/Header'
import HeaderNext from '@/components/home/HeaderNext'
import Foot from '@/components/home/Foot'
export default {
  name: 'SearchMore',
  // eslint-disable-next-line vue/no-unused-components
  components: { Foot, HeaderNext, Header }
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

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
