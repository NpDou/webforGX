<template>
  <div class="headerTitle">
    <el-date-picker
      v-model="date"
      type="daterange"
      unlink-panels
      format="yyyy-mm-dd"
      value-format="yyyy-mm-dd"
      :picker-options="pickerOptions"
      range-separator="至"
      @change="change"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      >
    </el-date-picker>
    <el-input placeholder="请输入内容" @change="change" prefix-icon="el-icon-search" v-model="name">
    </el-input>
  </div>
</template>
<script>
export default {
  name: "headerTitle",
  data() {
    return {
      name: '',
      date: [],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
    };
  },
  methods: {
    change(val) {
      if (val) {
        this.$emit('search', { name: this.name, date: this.date })
      }else{
        this.$emit('search', { name: this.name, date: ['',''] })
      }
    }
  },
};
</script>
<style lang="less" scoped>
.headerTitle {
  display: flex;
  margin-bottom: 30px;

  :deep( .el-input__inner ){
    border: 0 none;
    border-bottom: 1px solid #DCDFE6;
    border-radius: 0;
  }

  :deep( .el-input ){
    width: 250px;
    box-sizing: border-box;
    margin-right: 50px;
  }

  :deep( .el-date-editor ){
    width: 250px;
    margin-right: 50px;
  }
}
</style>