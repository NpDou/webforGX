<template>
  <div class="procurementResults">
    <search @search="onsearch" />
    <myTable :tableData="allArticleData.procurementResults.records"/>
    <el-pagination
        background
        :page-size="size"
        :total="allArticleData.procurementResults.total"
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
  name: 'procurementResults',
  mixins:[mixin],
  data() {
    return {
      params:{
        idChannel:5,
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
        key:'procurementResults',
        params:{...this.params,size:this.size,page:this.page}
      })
    }
  },
};
</script>
<style lang="less" scoped>
.procurementResults{
    padding: 15px 158px;
    /deep/ .el-pagination{
        margin-bottom: 20px;
        text-align: center;
    }
}


</style>