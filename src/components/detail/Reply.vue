<template>
  <el-card class="box-card" align="left">
    <el-divider><h1>回帖</h1></el-divider>
    <div>
      <el-row :gutter="10">
        <el-col :span="2">
          <img :src="this.$http.defaults.baseURL+'/res/images/avatar/dummy/0.jpg'" width="100%">
        </el-col>
        <el-col :span="22">
          <el-row style="margin-top: 3px">
            <el-link style="margin-right: 10px;font-size: 15px">江北才子</el-link>
            <span style="background-color: red; border-radius: 3px;color: #EBEEF5;margin-right: 20px">VIP12</span>
            <span style="">(楼主)</span>
          </el-row>
          <el-row style="margin-top: 3px;margin-top: 10px">
            <el-col>
              <span style="">2019-12-12 12:12:12</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px">你真强</el-row>
      <el-row style="margin-top: 10px;background-color: #F8F8F8;width: 36%;border-radius: 3px">
        <el-row>
          <el-col>
            <el-link :underline="true" type="primary" style="font-size: 16px">天才少年</el-link>
            : 你真强
          </el-col>
        </el-row>
        <el-row>
          <el-col align="right">
            <span style="font-size: 14px;margin-right: 12px">2020-12-12 12:12:12</span>
            <el-link :underline="true" type="primary" style="font-size: 20px;margin-right: 12px"><i class="el-icon-ice-tea"></i></el-link>
            <el-link :underline="true" type="primary" style="font-size: 20px;margin-right: 6px"><i class="el-icon-chat-dot-round"></i></el-link>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-link :underline="true" type="primary" style="font-size: 16px">哈哈哈</el-link>
            回复
            <el-link :underline="true" type="primary" style="font-size: 16px">天才少年</el-link>
            : 你才真强
          </el-col>
        </el-row>
        <el-row>
          <el-col align="right">
            <span style="font-size: 14px;margin-right: 12px">2020-12-12 12:12:12</span>
            <el-link :underline="true" type="primary" style="font-size: 20px;margin-right: 12px"><i class="el-icon-ice-tea"></i></el-link>
            <el-link :underline="true" type="primary" style="font-size: 20px;margin-right: 6px"><i class="el-icon-chat-dot-round"></i></el-link>
          </el-col>
        </el-row>
      </el-row>
      <el-row>
        <el-col align="right">
          <el-link style="font-size: 16px;margin-top: 16px;margin-right: 16px" type="primary">鼓励 <i class="el-icon-ice-tea"></i></el-link>
          <el-link style="font-size: 16px;margin-top: 16px" type="primary">说一句 <i class="el-icon-chat-dot-round"></i></el-link>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </div>

    <div>
      <el-row :gutter="10">
        <el-col :span="2">
          <img :src="this.$http.defaults.baseURL+'/res/images/avatar/dummy/0.jpg'" width="100%">
        </el-col>
        <el-col :span="22">
          <el-row style="margin-top: 3px">
            <el-link style="margin-right: 10px;font-size: 15px">江北才子</el-link>
            <span style="background-color: red; border-radius: 3px;color: #EBEEF5;margin-right: 20px">VIP12</span>
            <span style="">(楼主)</span>
          </el-row>
          <el-row style="margin-top: 3px;margin-top: 10px">
            <el-col>
              <span style="">2019-12-12 12:12:12</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px">你真强</el-row>
      <el-row style="margin-top: 10px;background-color: #F8F8F8;width: 36%;border-radius: 3px">
        <el-row>
          <el-col>
            <el-link :underline="true" type="primary" style="font-size: 16px">天才少年</el-link>
            : 你真强
          </el-col>
        </el-row>
        <el-row>
          <el-col align="right">
            <span style="font-size: 14px;margin-right: 12px">2020-12-12 12:12:12</span>
            <el-link :underline="true" type="primary" style="font-size: 20px;margin-right: 12px"><i class="el-icon-ice-tea"></i></el-link>
            <el-link :underline="true" type="primary" style="font-size: 20px;margin-right: 6px"><i class="el-icon-chat-dot-round"></i></el-link>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-link :underline="true" type="primary" style="font-size: 16px">哈哈哈</el-link>
            回复
            <el-link :underline="true" type="primary" style="font-size: 16px">天才少年</el-link>
            : 你才真强
          </el-col>
        </el-row>
        <el-row>
          <el-col align="right">
            <span style="font-size: 14px;margin-right: 12px">2020-12-12 12:12:12</span>
            <el-link :underline="true" type="primary" style="font-size: 20px;margin-right: 12px"><i class="el-icon-ice-tea"></i></el-link>
            <el-link :underline="true" type="primary" style="font-size: 20px;margin-right: 6px"><i class="el-icon-chat-dot-round"></i></el-link>
          </el-col>
        </el-row>
      </el-row>
      <el-row>
        <el-col align="right">
          <el-link style="font-size: 16px;margin-top: 16px;margin-right: 16px" type="primary">鼓励 <i class="el-icon-ice-tea"></i></el-link>
          <el-link style="font-size: 16px;margin-top: 16px" type="primary">说一句 <i class="el-icon-chat-dot-round"></i></el-link>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </div>

  </el-card>
</template>

<script>
export default {
  name: 'Reply'
}
</script>

<style lang="less" scoped>

</style>
