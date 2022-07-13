<template>
  <div class="myTable">
    <ul ref="scrollUl" :class="autoScroll?'autoScroll':'notScroll'">
        <li v-for="(item,index) in tableData" :key="index">
            <span class="content">
              <span class=text>
                {{item.title || '--'}}
                <span v-if="getStatus(item)" class="tag">new</span>
              </span>
            </span>
            <span class="time">{{item.modifyTime || '--'}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
import {animationUseScroll} from '@/utils/scroll.js' 
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
      }
    },
  data() {
    return {
      animationUseScrollFun: null,
    };
  },
  mounted() {
    if(this.autoScroll){
      this.toRoll()
    }
  },
  methods: {
    getStatus(item){
      let todayDate=new Date().setHours(0,0,0,0);//把今天的日期时分秒设置为00：00：00，返回一个时间戳, 
      let paramsDate=new Date(item.modifyTime).setHours(0,0,0,0);//给new Date()传入时间，并返回传入时间的时间戳
      return todayDate===paramsDate;//时间戳相同时 True 就为今天 
    },
    toRoll() {
      // 绑定滚动和鼠标事件
      this.animationLiveHood = animationUseScroll(
        this.$refs['scrollUl'],// 传入对应的ref 值
        {
          height: 33,
          delay: 2000
        }
      )
    },
  },
  destoryed() {
    // 离开页面 销毁定时器
    this.animationLiveHood = null
  }
};
</script>
<style lang="less" scoped>
  .myTable{
    padding-bottom: 30px;
    .autoScroll{
      height:330px;
      overflow: auto;
      &::-webkit-scrollbar { 
        width: 0 !important;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
      }
    }
    .notScroll{
      min-height: 25vh;
    }
    li{
      display: flex;
      padding: 7px 15px;
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