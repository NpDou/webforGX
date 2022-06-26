<template>
  <div class="aboutUs">
    <div class="header">
      <p class="fade" v-show="status">
        <span>立足南宁</span>
        <span>布局广西</span>
        <span>面向全国</span>
      </p>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="公司简介" name="first">
          <companyInfo />
      </el-tab-pane>
      <el-tab-pane label="企业架构" name="second">
        <enterpriseArchitecture />
      </el-tab-pane>
      <el-tab-pane label="公司历程" name="third">
        <companyHistory />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import companyInfo from './components/companyInfo.vue'
import enterpriseArchitecture from './components/enterpriseArchitecture.vue'
import companyHistory from './components/companyHistory.vue'
  export default {
    name:"AboutUs",
    components:{
        companyInfo,
        enterpriseArchitecture,
        companyHistory,
    },
    data() {
      return {
        activeName: 'second',
        status:true,
      };
    },
    methods: {
      handleClick(tab, event) {
        this.status=false
        this.$nextTick(()=>{
          this.status=true
        })
      }
    }
  };
</script>
<style lang="less" scoped>
.aboutUs{
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
  /deep/ .el-tabs__header{
    background-color: rgba(246, 252, 255, 1);
  }
  /deep/.el-tabs__item{
    padding: 0 100px!important;
  }
}

</style>