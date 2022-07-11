<template>
  <div class="myList">
    <ul>
        <li v-for="(item,index) in 8" :key="index">
            <div class="img">
                <img src="../assets/meetting.png" alt="">
            </div>
            <div class="content">
                <p class="title">无意者烈火焚身;以正义的烈火拔出黑暗。我</p>
                <p class="time">2022-05-01</p>
                <p class="text">折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结!真正的恩典因不折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结!真正的恩典因不折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结!真正的恩典因不折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结!真正的恩典因不折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结!</p>
            </div>
        </li>
    </ul>
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
    },
  data() {
    return {
      
    };
  },
  created() {
  },

  methods: {
    
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
    min-height: 50vh;
    li{
      display: flex;
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