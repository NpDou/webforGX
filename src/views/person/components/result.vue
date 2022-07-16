 <template>
    <div class="result">
        <p class="title">采购结果</p>
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="applyTime"
            label="报名日期"
            sortable
            width="180">
        </el-table-column>
        <el-table-column
            prop="title"
            label="采购公告"
            width="180">
        </el-table-column>
        <el-table-column
            prop="modify_time"
            label="更新时间">
        </el-table-column>
        <el-table-column
            prop="address"
            sortable
            label="状态">
            <template slot-scope="scope">
                <el-tag
                :type="scope.row.zbdw?(scope.row.zbdw === userInfo.id ? 'success' : 'danger') : 'primary'"
                disable-transitions>{{scope.row.zbdw?scope.row.zbdw === userInfo.id ? '已中标' : '未中标' : '未开标'}}</el-tag>
            </template>
        </el-table-column>
        </el-table>
        <el-pagination
          background
          v-if="total>0"
          :page-size="size"
          :total="total"
          :page-count="page"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="prev, pager, next">
          </el-pagination>
    </div>
  </template>

  <script>
  import { get, post } from "@/utils/request";

    export default {
      data() {
        return {
          tableData: [],
           size:20,
              page:1,
              total:0
        }
      },
      props: {
        userInfo: {
          type: Object,
          default() {
            return {
             
            }
          }
        }
      },
      methods:{
        handleSizeChange(val) {
            this.size = val
            this.fetchData()
        },
        handleCurrentChange(val) {
            this.page = val
            this.fetchData()
        },
        fetchData(){
          post('/api/article/getApplyListBySupplierId',{
            currentPage: this.page,
            pageSize : this.size,
            supplierId : this.userInfo.id,
          }).then(res=>{
            if(res.code==20000){
              this.tableData=res.data.list||[]
              this.total=res.data.total
            }else{
              this.tableData=[]
              this.total=0
            }
          })
        }
      },
      mounted(){
        this.fetchData()
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