<template>
  <div class="purchaseAnnouncement">
    <search @search="onsearch" />
    <myTable />
    <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, prev, pager, next"
        :total="1000">
    </el-pagination>
  </div>
</template>
<script>
import search from '@/components/search.vue'
import myTable from "@/components/myTable.vue";
export default {
  name: 'purchaseAnnouncement',
  components: {
    search,
    myTable
  },
  provide(){
    return{
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onsearch(params){
      console.log(params);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
};
</script>
<style lang="less" scoped>
.purchaseAnnouncement{
    padding: 15px 158px;
    /deep/ .el-pagination{
        margin-bottom: 20px;
        text-align: center;
    }
}


</style>