<template>
  <div class="changeNotification">
    <search />
    <myTable />
    <el-pagination
        background
        layout="total, prev, pager, next"
        :total="1000">
    </el-pagination>
  </div>
</template>
<script>
import search from '@/components/search.vue'
import myTable from "@/components/myTable.vue";
export default {
  name: 'changeNotification',
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