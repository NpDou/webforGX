<template>
  <div class="purchaseAnnouncement">
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