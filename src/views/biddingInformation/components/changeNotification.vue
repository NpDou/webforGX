<template>
  <div class="changeNotification">
    <search @search="onsearch" />
    <myTable :tableData="allArticleData.changeNotification.records"/>
    <el-pagination
        background
        v-if="allArticleData.changeNotification.total>0"
        :page-size="size"
        :total="allArticleData.changeNotification.total"
        :page-count="page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="prev, pager, next">
    </el-pagination>
  </div>
</template>
<script>
import mixin from "@/mixin/index.js";
export default {
  name: 'changeNotification',
  mixins:[mixin],
  data() {
    return {
      params:{
        idChannel:6,
        startDate:'',
        title:'',
        endDate:'',
      },
      page:1,
      size:20,
    }
  },
  methods: {
    fetchData(){
      this.getAllArticleData({
        key:'changeNotification',
        params:{...this.params,size:this.size,page:this.page}
      })
    }
  },
};
</script>
<style lang="less" scoped>
.changeNotification{
    padding: 15px 158px;
    /deep/ .el-pagination{
        margin-bottom: 20px;
        text-align: center;
    }
}


</style>