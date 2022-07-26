<template>
  <div class="myTable" :style="autoScroll?'overflowY:hidden':''">
    <ul :style="{animationDuration: time + 's',height:tableData.length *33+ 'px'}"  v-if="tableData && tableData.length>0" :class="autoScroll&&scrollNum > 1?'autoScroll':'notScroll'">
        <li v-for="(item,index) in tableData" :key="index" @click="gotoDetail(item)">
            <span class="content">
              <span class=text>
                {{item.title || '--'}}
                <span v-if="getStatus(item)" class="tag">new</span>
              </span>
            </span>
            <span class="time">{{item.modifyTime || '--'}}</span>
        </li>
        <template v-if="autoScroll && scrollNum > 1">
          <li v-for="(item,index) in tableData" :key="index+'-copy'" @click="gotoDetail(item)">
              <span class="content">
                <span class=text>
                  {{item.title || '--'}}
                  <span v-if="getStatus(item)" class="tag">new</span>
                </span>
              </span>
              <span class="time">{{item.modifyTime || '--'}}</span>
          </li>
        </template>
    </ul>
    <el-empty v-else :image-size="200"></el-empty>
  </div>
</template>

<script>
export default {
    name: "myTable",
    props:{
      tableData:{
        type: Array,
        default(){
          return []
        }
      },
      autoScroll:{
        type:Boolean,
        default(){
          return false
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
      time:12
    };
  },
  computed:{
    // 滚动层份数，当内容溢出scrollWrapHeight，复制两份，添加滚动动画
    // 否则就一份，不填加滚动动画
    scrollNum: function () {
      let successHeight = this.tableData.length * 33
      if (successHeight > 330) {
        return 2
      } else {
        return 1
      }
    },
  },
  methods: {
    gotoDetail(item){
      this.$router.push({
        path:'/detail',
        query:{
          id:item.id,
          tab:this.tab || this.$route.query.tab,
          type:this.type || this.$route.name
        }
      })
    },
    getStatus(item){
      let todayDate=new Date().setHours(0,0,0,0);//把今天的日期时分秒设置为00：00：00，返回一个时间戳, 
      let paramsDate=new Date(item.modifyTime).setHours(0,0,0,0);//给new Date()传入时间，并返回传入时间的时间戳
      return todayDate===paramsDate;//时间戳相同时 True 就为今天 
    },
    toRoll() {
      // 绑定滚动和鼠标事件
      if(this.$refs['scrollUl']){
        this.animationLiveHood = animationUseScroll(
          this.$refs['scrollUl'],// 传入对应的ref 值
          {
            height: 33,
            delay: 2000
          }
        )
      }
    },
  },
};
</script>
<style lang="less" scoped>
  .myTable{
    min-height: 25vh;
    padding-bottom: 30px;
    .autoScroll{
      animation: scrollData 10s infinite linear;
      animation-play-state:runing;

      /* Safari and Chrome */
      -webkit-animation:scrollData 10s infinite linear;
      -webkit-animation-play-state:runing;
      &::-webkit-scrollbar { 
        width: 0 !important;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
      }
      &:hover{
        animation-play-state:paused;
        -webkit-animation-play-state:paused;
      }
    }
    @keyframes scrollData {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-100%);
      }
    }
    .notScroll{
      min-height: 25vh;
    }
    li{
      display: flex;
      padding: 7px 15px;
      cursor:pointer;
      &:hover{
        .text{
          color: #1890ff;
        }
        .time{
          color: #1890ff;
        }
      }
    }
    .content{
      display: inline-block;
      width: 70%;
      display: flex;
      align-items: center;
      .text{
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgba(0, 0, 0, 1);
        font-size: 14px;
      }
      .tag{
        height: 20px;
        line-height: 18px;
        border-radius: 3px;
        padding: 0 5px;
        font-size: 12px;
        color: #fff;
        background-color: rgba(255, 13, 13, 100);
      }
    }
    .time{
      display: inline-block;
      text-align: right;
      width: 30%;
      color: rgba(0, 0, 0, 1);
      font-size: 14px;
    }
  }
</style>