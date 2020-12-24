<template>
  <el-container>
    <!-- 头部 -->
    <el-header height="60px" class="header-Publish">
      <Header></Header>
    </el-header>
    <!-- 主体 -->
    <el-main>
      <el-row style="width: 100%">
        <!-- 第一行 -->
        <HeaderNext></HeaderNext>
        <el-row>
          <el-col :span="18" :offset="3">
            <el-card style="width: 100%;margin-top: 10px" align="left">
              <span>发表新帖</span>
              <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
              <el-form :model="toFrom" :rules="fromRules" ref="toFromRef">
                <el-row :gutter="2">
                  <!-- 板块选择 -->
                  <el-col :span="6">
                    <div>
                      <el-form-item prop="moduleId">
                        <el-select v-model="toFrom.moduleId" placeholder="请选择所在板块" @change="convert">
                          <el-option-group
                            v-for="group in selectList"
                            :key="group.id"
                            :label="group.moduleName">
                            <el-option
                              v-for="item in group.sonModuleList"
                              :key="item.moduleName"
                              :label="item.moduleName"
                              :value="item.id">
                            </el-option>
                          </el-option-group>
                        </el-select>
                      </el-form-item>
                    </div>
                  </el-col>
                  <!-- 标题 -->
                  <el-col :span="18">
                    <el-form-item prop="title">
                      <el-input placeholder="请输入内容" v-model="toFrom.title">
                        <template slot="prepend">标题</template>
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row style="margin-top: 10px">
                  <el-row>
                    <!-- 插入图片等快捷栏框 -->
                    <div style="background-color: #F5F7FA;border-radius: 3px;border: 1px #DCDFE6 solid;color: #909399;font-size: 14px;height: 31px;">
                    </div>
                  </el-row>
                  <el-row :gutter="2">
                    <!-- 内容输入框 -->
                    <el-col :span="12">
                      <el-form-item prop="content">
                        <el-input
                          id="oriContent"
                          rows="16"
                          type="textarea"
                          placeholder="请输入内容"
                          v-model="toFrom.content"
                          maxlength="3000"
                          show-word-limit
                          @input="convert"
                        >
                        </el-input>
                      </el-form-item>
                    </el-col>
                    <!-- 实时解析成markdown框 -->
                    <el-col :span="12">
                      <div style="border: 1px #DCDFE6 solid;border-radius: 3px;height: 345px">
                        <VueShowdown :markdown="toFrom.content" flavor="github" :options="{ emoji: true }"></VueShowdown>
                      </div>
                    </el-col>
                  </el-row>
                </el-row>
                <!-- 悬赏框 -->
                <el-row style="margin-top: 5px">
                  <el-input placeholder="请输入悬赏数量" v-model="toFrom.money" style="width: 300px">
                    <template slot="prepend">悬赏</template>
                  </el-input>
                </el-row>
                <!-- 人类验证框 -->
                <el-row style="margin-top: 5px">
                  <el-input placeholder="请输入答案" style="width: 300px">
                    <template slot="prepend">验证<span style="margin-left: 10px;color: red">1+1=?</span></template>
                  </el-input>
                </el-row>
                <!-- 发布按钮 -->
                <el-row style="margin-top: 5px">
                  <el-button @click.prevent="publish">立即发布</el-button>
                </el-row>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
        <Foot></Foot>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import VueShowdown from 'vue-showdown'
import Header from '@/components/home/Header'
import Vue from 'vue'
import HeaderNext from '@/components/home/HeaderNext'
import Foot from '@/components/home/Foot'

Vue.use(VueShowdown, {
  flavor: 'github',
  options: {
    emoji: false
  }
})
export default {
  components: { Foot, Header, HeaderNext },
  async created () {
    const { data: res } = (await this.$http.get('fatherModule/select/0/10'))
    this.selectList = res.data.records
  },
  data () {
    return {
      selectList: [],
      toFrom: {
        moduleId: '',
        title: '',
        content: '',
        userId: '',
        money: 12
      },
      value: '',
      fromRules: {
        moduleId: [
          { required: true, message: '请选择板块', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    convert () {
    },
    publish () {
      this.toFrom.userId = JSON.parse(window.sessionStorage.getItem('user')).id
      this.$refs.toFromRef.validate(async valid => {
        // eslint-disable-next-line no-useless-return
        if (!valid) return
        // eslint-disable-next-line no-unused-vars
        const { data: res } = (await this.$http.post('content/add', this.toFrom))
        // eslint-disable-next-line eqeqeq
        if (res.code == -1) return this.$message.error('发布失败，请重试！')
        this.$message.success('发布成功！')
        // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage中
        //   1.1 项目中出了登录之外的其它API接口，必须是在登录之后才能访问
        //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage中
        // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
        console.log(res)
        await this.$router.push({
          path: '/detail', query: { contentId: res.data.id }
        })
      })
    }
  }
}

</script>

<style lang="less" scoped>
.header-Publish{
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
