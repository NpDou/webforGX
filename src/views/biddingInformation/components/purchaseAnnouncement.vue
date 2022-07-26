<template>
  <div class="purchaseAnnouncement">
    <search @search="onsearch" />
    <myTable :tableData="allArticleData.purchaseAnnouncement.records"/>
    <el-pagination
        background
        v-if="allArticleData.purchaseAnnouncement.total>0"
        :page-size="size"
        :total="allArticleData.purchaseAnnouncement.total"
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
  name: 'purchaseAnnouncement',
  mixins:[mixin],
  data() {
    return {
      params:{
        idChannel:4,
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
        key:'purchaseAnnouncement',
        params:{...this.params,size:this.size,page:this.page}
      })
    }
  },
};
</script>
<style lang="less" scoped>
.purchaseAnnouncement{
    padding: 15px 158px;
    :deep( .el-pagination){
        margin-bottom: 20px;
        text-align: center;
    }
}


</style>