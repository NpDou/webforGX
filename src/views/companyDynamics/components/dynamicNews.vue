<template>
  <div class="dynamicNews">
    <search @search="onsearch" />
    <myList />
    <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>
  </div>
</template>
<script>
import search from '@/components/search.vue'
import myList from "@/components/myList.vue";
export default {
  name: 'dynamicNews',
  components: {
    search,
    myList
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
.dynamicNews{
    padding: 15px 158px;
    /deep/ .el-pagination{
        margin-bottom: 20px;
        text-align: center;
    }
}


</style>