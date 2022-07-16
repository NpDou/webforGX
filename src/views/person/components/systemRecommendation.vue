 <template>
    <div class="systemRecommendation">
        <p class="title">系统推荐采购公告</p>
        <myTable></myTable>
        <el-pagination
            background
            layout="total, prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
  </template>
  <script>
import myTable from "@/components/myTable.vue"

    export default {
        name:"systemRecommendation",
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      components:{
        myTable
      }
    }
  </script>
  <style lang="less" scoped>
  .systemRecommendation{
    padding: 0 30px;
    background: #fff;
    height: 100%;
    overflow: auto;
    .title{
        color: rgba(24, 144, 255, 1);
        font-size: 18px;
        padding: 30px 0;
        padding-bottom: 15px;
    }
    :deep( .el-pagination){
        margin-bottom: 20px;
        text-align: center;
    }
  }
  </style>