<template>
  <el-container>
    <!-- 头部 -->
    <el-header>Header</el-header>
    <!-- 主体 -->
    <el-main>
      <!-- 中间主要内容 -->
      <div class="home-main">
        <!-- 第一行 -->
        <el-row :gutter="20">
          <!-- 置顶 -->
          <el-col :span="16" class="topping-col"><Topping></Topping></el-col>
          <!-- 温馨通道和签到 -->
          <el-col :span="8">
            <!-- 温馨通道 -->
            <el-row><WarmChannle></WarmChannle></el-row>
            <!-- 签到 -->
            <el-row><Registration></Registration></el-row>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="20">
          <!-- 板块 -->
          <el-col :span="16" class="topping-col"><plate></plate></el-col>
          <!-- 温馨通道和签到 -->
          <el-col :span="8">
            <!-- 温馨通道 -->
            <el-row><Ranking></Ranking></el-row>
            <!-- 签到 -->
            <el-row><Hot></Hot></el-row>
            <el-row><Advertisement></Advertisement></el-row>
            <el-row><Links></Links></el-row>
          </el-col>
        </el-row>
        <!-- 第三行底部 -->
        <el-row>
          <hr style=" height:2px;border:none;border-top:1px solid #B3B3B2;" />
          <span>Powered by 谢振瑜 ©2019 xiezhenyu98.com</span><br/>
          <span>桂ICP备19003999号   邮箱: 751811152@qq.com</span>
          <br/>
          <br/>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Topping from '@/components/home/Topping'
import Registration from '@/components/home/Registration'
import WarmChannle from '@/components/home/WarmChannle'
import Plate from '@/components/home/Plate'
import Ranking from '@/components/home/Ranking'
import Hot from '@/components/home/Hot'
import Advertisement from '@/components/home/Advertisement'
import Links from '@/components/home/Links'
export default {
  name: 'Home',
  components: {
    Plate,
    WarmChannle,
    Registration,
    Topping,
    Ranking,
    Hot,
    // eslint-disable-next-line vue/no-unused-components
    Links,
    Advertisement
  }
}

</script>

<style lang="less" scoped>
.el-container{
  height: 100%;
  > .el-header{
    background-color: #488FCE;
  }
  > .el-footer{
    background-color: #488FCE;
  }
}

.el-main {
  display: flex;
  justify-content: center;
  background-color: #F2F2F2;
}

.home-main{
  width: 70%;
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
</style>
