<template>
  <div class="biddingInformation">
    <div class="header">
      <p class="fade" v-show="status">
        <span>专业</span>
        <span>诚信</span>
        <span>创新</span>
        <span>合作</span>
        <span>共赢</span>
      </p>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="采购公告" name="purchaseAnnouncement">
        <purchaseAnnouncement />
      </el-tab-pane>
      <el-tab-pane label="采购结果" name="procurementResults">
        <procurementResults />
      </el-tab-pane>
      <el-tab-pane label="更改通知" name="changeNotification">
        <changeNotification />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import purchaseAnnouncement from './components/purchaseAnnouncement.vue'
import procurementResults from './components/procurementResults.vue'
import changeNotification from './components/changeNotification.vue'
  export default {
    name:"biddingInformation",
    components:{
        purchaseAnnouncement,
        procurementResults,
        changeNotification,
    },
    data() {
      return {
        activeName: 'purchaseAnnouncement',
        status:true,
      };
    },
    watch:{
      $route:{
        deep:true,
        handler(val){
          this.activeName=this.$route.query.tab
          this.status=false
          this.$nextTick(()=>{
            this.status=true
          })
        }
      }
    },
    methods: {
      handleClick(tab, event) {
        this.status=false
        this.$nextTick(()=>{
          this.status=true
        })
        this.$router.replace({
          path: this.$route.path,
          query: {
            tab: this.activeName
          }
        })
      }
    },
    mounted(){
      this.activeName=this.$route.query.tab
    }
  };
</script>
<style lang="less" scoped>
.biddingInformation{
  .header{
    background-image: url(../../assets/background-1.png);
    width: 100%;
    height: 150px;
    line-height: 150px;
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    .fade{
      color: rgba(255, 255, 255, 10);
      font-size: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: fadeInAnimation ease 2s; 
      animation-iteration-count: 1; /*设置动画播放次数*/
      animation-fill-mode: forwards; /*设置样式以在动画不播放时应用元素。forward是设置动画结束后，使用元素的结束属性值*/
      span{
        padding: 0 30px;
      }
    }
    @keyframes fadeInAnimation { 
        0% { 
            opacity: 0; /*设置不透明度*/
        } 
        100% { 
            opacity: 1; 
        } 
    }
    
  }
  :deep( .el-tabs__header){
    background-color: rgba(246, 252, 255, 1);
  }
  :deep(.el-tabs__item){
    padding: 5px 100px!important;
    box-sizing: content-box;
  }
}

</style>