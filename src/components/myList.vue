<template>
  <div class="myList">
    <ul v-if="tableData && tableData.length>0">
        <li v-for="(item,index) in tableData" :key="index" @click="gotoDetail(item)">
            <div class="img">
                <img :src="getSrc(item)" alt="">
            </div>
            <div class="content">
                <p class="title">{{item.title || '--'}}</p>
                <p class="time">{{item.modifyTime || '--'}}</p>
                <p class="text">{{item.summary || '--'}}</p>
            </div>
        </li>
    </ul>
    <el-empty v-else :image-size="200"></el-empty>
  </div>
</template>

<script>
export default {
    name: "myList",
    props:{
      tableData:{
        type: Array,
        default(){
          return []
        }
      },
      tab:{
        type:String,
        default(){
          return ''
        }
      },
      type:{
        type:String,
        default(){
          return ''
        }
      }
    },
  data() {
    return {
      
    };
  },
  created() {
  },

  methods: {
    getSrc(item){
      return `${process.env.VUE_APP_SERVER_URL}/api/file/download?idFile=${item.id}`
    },
    gotoDetail(item){
      this.$router.push({
        path:'/detail',
        query:{
          id:item.id,
          tab:this.tab || this.$route.query.tab,
          type:this.type || this.$route.name
        }
      })
    }
  },
};
</script>
<style lang="less" scoped>
.text{
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgba(0, 0, 0, 1);
        font-size: 14px;
      }
  .myList{
    padding-bottom: 30px;
    min-height: 25vh;
    li{
      display: flex;
      cursor:pointer;
      margin-bottom: 64px;
      .img{
        width: 341px;
        height: 196px;
        img{
            width: 341px;
            height: 100%;
            vertical-align: baseline;
        }
      }
      .content{
        flex: 1;
        overflow: hidden;
        padding-left: 15px;
        .title{
            width: 70%;
            color: rgba(0, 0, 0, 1);
            font-size: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 10px 0;
        }
        .time{
            width: 100%;
            padding-bottom: 10px;
            color: rgba(146, 146, 146, 1);
            font-size: 20px;
        }
        .text{
            width: 100%;
            color: rgba(16, 16, 16, 1);
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5; // 多行在这里修改数字即可，这里显示2行
            overflow:hidden;
            -webkit-box-orient: vertical;
            white-space: normal;
        }
      }
    }
  }
</style>