<template>
  <div class="announcement">
    <search @search="onsearch" />
    <myList :tableData="allArticleData.announcement.records"/>
    <el-pagination
        v-if="allArticleData.announcement.total>0"
        background
        :page-size="size"
        :total="allArticleData.announcement.total"
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
  name: 'announcement',
  mixins:[mixin],
  provide(){
    return{
    }
  },
  data() {
    return {
      params:{
        idChannel:3,
        startDate:'',
        title:'',
        publish: 1,
        endDate:'',
      },
      page:1,
      size:20,
    }
  },
  methods: {
    fetchData(){
      this.getAllArticleData({
        key:'announcement',
        params:{...this.params,size:this.size,page:this.page}
      })
    }
  },
};
</script>
<style lang="less" scoped>
.announcement{
    padding: 15px 158px;
    :deep( .el-pagination){
        margin-bottom: 20px;
        text-align: center;
    }
}


</style>