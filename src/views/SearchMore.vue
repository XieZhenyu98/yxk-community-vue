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
          <el-col :span="24">
            <el-card class="search-card" style="height: 500px;">
              <span style="color:#FFFFFF;font-size: 40px;font-weight: bold;z-index: 2">帖 子 检 索</span><br/>
              <span style="color:#FFFFFF;font-size: 100px;font-weight: bold;"><i class="el-icon-s-data"></i></span>
              <el-row>
                <el-col :span="18" class="center" :offset="3">
                  <el-input
                    v-model="search"
                    @focus="focus"
                    @blur="blur"
                    @keyup.enter.native="searchHandler"
                    @input="changeSearch"
                    placeholder="搜索标题或内容"
                  >
                    <el-button slot="append" icon="el-icon-search" id="search" @click="searchHandler"></el-button>
                  </el-input>
                  <!---设置z-index优先级,防止被走马灯效果遮挡-->
                  <el-card
                    @mouseenter="enterSearchBoxHanlder"
                    v-if="isSearch"
                    class="box-card"
                    id="search-box"
                    style="position:relative;z-index:15;text-align: left"
                  >
                    <dl v-if="isHistorySearch">
                      <dt class="search-title" v-show="history">历史搜索</dt>
                      <dt class="remove-history" v-show="history" @click="removeAllHistory">
                        <i class="el-icon-delete"></i>清空历史记录
                      </dt>
                      <el-tag
                        v-for="search in historySearchList"
                        :key="search.id"
                        closable
                        :type="search.type"
                        @close="closeHandler(search)"
                        @click="clickHistorySearch(search)"
                        style="margin-right:5px; margin-bottom:5px;"
                      >{{search.name}}</el-tag>
                      <dt class="search-title">热门搜索</dt>
                      <dd @click="clickKeywords(search.keywords)" v-for="search in hotSearchList" :key="search.id"><a href="#">{{search.keywords}}</a></dd>
                    </dl>
                    <dl v-if="isSearchList">
                      <dd @click="clickKeywords(search.keywords)" v-for="search in searchList" :key="search.id"><a href="#">{{search.keywords}}</a></dd>
                    </dl>
                  </el-card>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
        <div style="width: 100%;margin-top: 20px">
          <el-row style="margin-top: 20px">
            <el-col :span="18" :offset="3">
              <el-card class="box-card">
                <div v-if="contentList.length == 0">
                  暂无数据
                </div>
                <div @click="toDetail(item.id)" style="text-align: left" v-for="item in contentList" :key="item.id">
                  <span v-html="item.title"></span>
                  <p v-html="item.content"></p>
                  <div style="text-align: right">{{ item.time }}</div>
                  <hr style=" height:2px;border:none;border-top:1px solid #EBEEF5;" />
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
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
  components: { Foot, HeaderNext, Header },
  data () {
    return {
      search: '',
      isFocus: false,
      hotSearchList: ['暂无热门搜索'],
      historySearchList: [],
      searchList: ['暂无数据'],
      history: false,
      types: ['', 'success', 'info', 'warning', 'danger'],
      contentList: []
    }
  },
  methods: {
    async clickKeywords (keywords) {
      this.search = keywords
      const { data: res } = (await this.$http.get('es/content?keywords=' + keywords + '&pageNo=' + 1 + '&pageSize=' + 10))
      this.contentList = res.data
    },
    async changeSearch () {
      const { data: res } = (await this.$http.get('searchKeywords/getSearchKeywordsByKeywords?pageSize=' + 10 + '&keywords=' + this.search))
      this.searchList = res.data.records
      console.log(this.searchList)
    },
    async clickHistorySearch (search) {
      this.search = search.name
      const { data: res } = (await this.$http.get('es/content?keywords=' + search.name + '&pageNo=' + 1 + '&pageSize=' + 10))
      this.contentList = res.data
    },
    async toDetail (id) {
      // await this.$router.push('/detail/' + this.dyItem.id)
      await this.$router.push({
        path: '/detail', query: { contentId: id }
      })
    },
    loadHistory () {
      return JSON.parse(localStorage.getItem('searchHistory'))
    },
    getRandomNumber (min, max) {
      return parseInt(Math.random() * (max - min)) + min
    },
    saveHistory (arr) {
      localStorage.setItem('searchHistory', JSON.stringify(arr))
    },
    removeAllHistory () {
      localStorage.removeItem('searchHistory')
    },
    focus () {
      this.isFocus = true
      this.historySearchList =
      this.loadHistory() == null ? [] : this.loadHistory()
      this.history = this.historySearchList.length !== 0
    },
    blur () {
      var self = this
      this.searchBoxTimeout = setTimeout(function () {
        self.isFocus = false
      }, 300)
    },
    enterSearchBoxHanlder () {
      clearTimeout(this.searchBoxTimeout)
    },
    async searchHandler () {
      const n = this.getRandomNumber(0, 5)
      const exist =
        this.historySearchList.filter(value => {
          return value.name === this.search
        }).length !== 0
      if (!exist) {
        this.historySearchList.push({ name: this.search, type: this.types[n] })
        this.saveHistory(this.historySearchList)
      }
      this.history = this.historySearchList.length !== 0
      const { data: res } = (await this.$http.get('es/content?keywords=' + this.search + '&pageNo=' + 1 + '&pageSize=' + 10))
      this.contentList = res.data
    },
    closeHandler (search) {
      this.historySearchList.splice(this.historySearchList.indexOf(search), 1)
      this.saveHistory(this.historySearchList)
      clearTimeout(this.searchBoxTimeout)
      if (this.historySearchList.length === 0) {
        this.history = false
      }
    }
  },
  computed: {
    isHistorySearch () {
      return this.isFocus && !this.search
    },
    isSearchList () {
      return this.isFocus && this.search
    },
    isSearch () {
      return this.isFocus
    }
  },
  async created () {
    const { data: res } = (await this.$http.get('searchKeywords/getSearchKeywordsByCount?pageSize=' + 10))
    this.hotSearchList = res.data.records
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

.left {
  margin-left: 200px;
}
.center {
  margin-top: 15px;
  margin-left: 200px;
}
#search {
  background-color: #ffc300;
  border-radius: 0%;
}
.search-title {
  color: #bdbaba;
  font-size: 15px;
  margin-bottom: 5px;
}
.remove-history {
  color: #bdbaba;
  font-size: 15px;
  float: right;
  margin-top: -22px;
}
#search-box {
  width: 94%;
  height: 200px;
  margin-top: 0px;
  padding-bottom: 20px;
}

.search-card {
  background:
    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0,
    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0,
    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px,
      radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px,
    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px,
    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0,
    linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%);
  background-size: 470px 470px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%;
  background-color: #840b2a;
}
</style>
