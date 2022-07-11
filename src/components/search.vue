<template>
  <div class="headerTitle">
    <el-date-picker
      v-model="date"
      type="daterange"
      @change="change"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
    <el-input
        placeholder="请输入内容"
        @change="change"
        prefix-icon="el-icon-search"
        v-model="name">
  </el-input>
  </div>
</template>

<script>
export default {
    name: "headerTitle",
  data() {
    return {
      name:'',
      date:[]
    };
  },
  created() {
  },

  methods: {
    change(val){
      this.$emit('search',{name:this.name,date:this.date})
    }
  },
};
</script>
<style lang="less" scoped>
  .headerTitle{
    display: flex;
    margin-bottom: 30px;
    /deep/ .el-input__inner{
      border: 0 none;
      border-bottom: 1px solid #DCDFE6;
      border-radius: 0;
    }
    /deep/ .el-input{
      width: 250px;
      box-sizing: border-box;
      margin-right: 50px;
    }
    /deep/ .el-date-editor{
      width: 250px;
      margin-right: 50px;
    }
  }
</style>