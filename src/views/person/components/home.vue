 <template>
    <div class="home">
        <p class="title">最新更改通知<span class="more" @click="seeAll(1)">全部</span></p>
        <myTable></myTable>
        <p class="title">系统推荐 <span class="more" @click="seeAll(0)">全部</span></p>
        <myTable></myTable>
    </div>
  </template>
  <script>
import myTable from "@/components/myTable.vue"
    export default {
        name:"home",
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
      },
      methods:{
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