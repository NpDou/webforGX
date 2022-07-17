 <template>
    <div class="home">
        <p class="title">最新更改通知<span class="more" @click="seeAll(1)">全部</span></p>
        <myTable :tableData="tableData1"></myTable>
        <p class="title">系统推荐 <span class="more" @click="seeAll(0)">全部</span></p>
        <myTable :tableData="tableData2"></myTable>
    </div>
  </template>
  <script>
 import { get, post } from "@/utils/request";

import myTable from "@/components/myTable.vue"
    export default {
        name:"home",
      data() {
        return {
          tableData1: [],
          tableData2: [],
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
      components:{
        myTable
      },
      mounted(){
        this.fetchData1()
        this.fetchData2()
      },
      methods:{
        fetchData1(){
          post('/api/article/getArticleBySupplierId',{
            currentPage: 1,
            pageSize : 15,
            id_channel: 6,
            supplierId : this.userInfo.id,
          }).then(res=>{
            if(res.code==20000){
              this.tableData1=res.data.list||[]
            }else{
              this.tableData1=[]
            }
          })
        },
        fetchData2(){
          post('/api/article/getArticleBySupplierId',{
            currentPage: 1,
            pageSize : 15,
            id_channel: 4,
            supplierId : this.userInfo.id,
          }).then(res=>{
            if(res.code==20000){
              this.tableData2=res.data.list||[]
            }else{
              this.tableData2=[]
            }
          })
        },
        seeAll(val){
            this.$emit('viewMore',val)
        }
      }
    }
  </script>
  <style lang="less" scoped>
  .home{
    padding: 0 30px;
    background: #fff;
    height: 100%;
    overflow: auto;
    .title{
        color: rgba(24, 144, 255, 1);
        font-size: 18px;
        padding: 30px 0;
        padding-bottom: 15px;
        .more{
            color: rgba(145, 145, 145, 1);
            font-size: 14px;
            float: right;
            padding-right: 20px;
            cursor: pointer;
        }
    }
  }
  </style>