<template>
  <el-container>
    <!-- 头部 -->
    <el-header height="60px" class="header-home">
      <Header></Header>
    </el-header>
    <!-- 主体 -->
    <el-main>
      <!-- 中间主要内容 -->
      <div class="home-main">
        <!-- 第一行 -->
        <HeaderNext></HeaderNext>
        <el-row :gutter="20">
          <!-- 置顶 -->
          <el-col :span="12" class="topping-col" :offset="3">
            <!-- 置顶 -->
            <el-row><Topping></Topping></el-row>
            <!-- 板块 -->
            <el-row><plate></plate></el-row>
          </el-col>
          <!-- 温馨通道和签到 -->
          <el-col :span="6">
            <!-- 温馨通道 -->
            <el-row><WarmChannle></WarmChannle></el-row>
            <!-- 签到 -->
            <el-row class="Registration"><Registration></Registration></el-row>
            <!-- 排行榜 -->
            <el-row><Ranking></Ranking></el-row>
            <!-- 热榜 -->
            <el-row><Hot></Hot></el-row>
            <!-- 广告 -->
            <el-row><Advertisement></Advertisement></el-row>
            <!-- 友情链接 -->
            <el-row><Links></Links></el-row>
          </el-col>
        </el-row>
        <!-- 第三行底部 -->
        <el-row class="bottom-row">
          <el-col :span="18" :offset="3">
            <hr style=" height:2px;border:none;border-top:1px solid #B3B3B2;" />
            <span>Powered by 谢振瑜 ©2019 xiezhenyu98.com</span><br/>
            <span>桂ICP备19003999号   邮箱: 751811152@qq.com</span>
          </el-col>
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
import Header from '@/components/home/Header'
import HeaderNext from '@/components/home/HeaderNext'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    Header,
    HeaderNext,
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
