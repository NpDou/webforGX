<template>
  <div class="myTable">
    <ul ref="scrollUl" :class="autoScroll?'autoScroll':'notScroll'">
        <li v-for="(item,index) in 16" :key="index">
            <span class="content">
              <span class=text>
                广西壮族自治区亚热带作物研究所2022年6月至7月政府采购意向广西壮族自治区亚热带作物研究所2022年6月至7月政府采购意向广西壮族自治区亚热带作物研究所2022年6月至7月政府采购意向广西壮族自治区亚热带作物研究所2022年6月至7月政府采购意向广西壮族自治区亚热带作物研究所2022年6月至7月政府采购意向广西壮族自治区亚热带作物研究所2022年6月至7月政府采购意向广西壮族自治区亚热带作物研究所2022年6月至7月政府采购意向
              </span>
              <span v-if="index==1||index==2" class="tag">new</span>
            </span>
            <span class="time">2020-09-22  08:20:46</span>
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
      min-height: 50vh;
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