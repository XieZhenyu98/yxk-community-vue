<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="标题"
        prop="title">
      </el-table-column>
      <el-table-column
        label="日期"
        prop="time">
      </el-table-column>
      <el-table-column
        label="阅读数"
        prop="times">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="查看" placement="top">
            <el-button size="small " @click="handleSearch(scope.row)" icon="el-icon-search" circle></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, total"
      @current-change="paginationChange"
      :total="page.total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'UserCollectionList',
  async created () {
    this.userInfo = JSON.parse(window.sessionStorage.getItem('user'))
    const { data: res } = (await this.$http.get('content/select/collection/0/10/' + this.userInfo.id))
    this.tableData = res.data.records
    this.page = res.data
  },
  methods: {
    handleSearch (value) {
      this.$router.push('/detail?contentId=' + value.id)
    },
    async paginationChange (page) {
      var limit = 1
      if (page === 0 || page === 1) {
        limit = 0
      } else {
        limit = 10 * (page - 1)
      }
      const { data: res } = await this.$http.get('content/select/collection/' + limit + '/10/' + this.userInfo.id)
      // console.log('/content/select/user/4/' + ((page - 1) * 10) + '/10')
      this.tableData = res.data.records
      this.page = res.data
    }
  },
  data () {
    return {
      userInfo: {},
      key: 1,
      tableData: [],
      search: '',
      page: {}
    }
  }
}
</script>

<style lang="less" scoped>

</style>
