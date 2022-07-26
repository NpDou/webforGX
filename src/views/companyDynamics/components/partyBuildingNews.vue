<template>
  <div class="partyBuildingNews">
    <search @search="onsearch" />
    <myList :tableData="allArticleData.partyBuildingNews.records"/>
    <el-pagination
        background
        v-if="allArticleData.partyBuildingNews.total>0"
        :page-size="size"
        :total="allArticleData.partyBuildingNews.total"
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
  name: 'partyBuildingNews',
  mixins: [mixin],
  data() {
     return {
      params:{
        idChannel:2,
        publish: 1,
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
        key:'partyBuildingNews',
        params:{...this.params,size:this.size,page:this.page}
      })
    }
  },
};
</script>
<style lang="less" scoped>
.partyBuildingNews {
  padding: 15px 158px;

  :deep( .el-pagination) {
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>