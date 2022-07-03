 <template>
    <div class="result">
        <p class="title">采购结果</p>
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="date"
            label="报名日期"
            sortable
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="采购公告"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="更新时间">
        </el-table-column>
        <el-table-column
            prop="address"
            sortable
            label="状态">
            <template slot-scope="scope">
                <el-tag
                :type="scope.row.tag === '家' ? 'primary' : 'success'"
                disable-transitions>{{scope.row.tag}}</el-tag>
            </template>
        </el-table-column>
        </el-table>
    </div>
  </template>

  <script>
    export default {
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
      }
    }
  </script>
  <style lang="less" scoped>
  .result{
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
  }
  </style>