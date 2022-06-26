<template>
  <div class="headerTitle">
    <el-date-picker
      v-model="date"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
    <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="nanme">
  </el-input>
  </div>
</template>

<script>
export default {
    name: "headerTitle",
    props:['content'],
  data() {
    return {
      nanme:'',
      date:''
    };
  },
  created() {
  },

  methods: {
    
  },
};
</script>
<style lang="less" scoped>
  .headerTitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid;
    height: 70px;
    color: rgba(0, 122, 255, 1);
    font-size: 22px;
    padding-left: 60px;
    padding-right: 60px;
    border-color: rgba(0, 122, 255, 0.7);
    margin-bottom: 15px;
    font-weight: bold;
    .more{
      color: rgb(204, 202, 202);
      font-size: 14px;
    }
  }
</style>