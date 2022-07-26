 <template>
    <div class="systemRecommendation">
        <p class="title">更改通知</p>
        <myTable :tableData="tableData" tab="purchaseAnnouncement" type="personhome"></myTable>
        <el-pagination
          background
          v-if="total>0"
          :page-size="size"
          :total="total"
          :page-count="page"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="prev, pager, next,total">
          </el-pagination>
    </div>
  </template>
  <script>
import myTable from "@/components/myTable.vue"
 import { get, post } from "@/utils/request";
    export default {
        name:"changeNotificationforperson",
      components:{
        myTable
      },
      data() {
        return {
          tableData: [],
          size:20,
          page:1,
          total:0,
          userInfo:{},
          id:''
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
          post('/api/article/getArticleBySupplierId',{
            currentPage: this.page,
            pageSize: this.size,
            supplierId: this.id,
            id_channel: 6,
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
        this.userInfo=sessionStorage.getItem("SESSIONID")?JSON.parse(sessionStorage.getItem("SESSIONID")):{}
        this.id=this.$route.query.id || this.userInfo.id
        this.fetchData()
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