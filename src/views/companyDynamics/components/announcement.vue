<template>
  <div class="announcement">
    <search />
    <myList />
    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>
  </div>
</template>
<script>
import search from '@/components/search.vue'
import myList from "@/components/myList.vue";
export default {
  name: 'announcement',
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
    
  },
};
</script>
<style lang="less" scoped>
.announcement{
    padding: 15px 158px;
    /deep/ .el-pagination{
        margin-bottom: 20px;
        text-align: center;
    }
}


</style>