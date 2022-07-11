<template>
  <div class="footer">
    <div class="footone">
      <div class="ftonr_r fl">
        <h2>联系我们</h2>
        <p>0771-5601506</p>
        <div class="ftonr_r fl">
          <img src="../assets/building.png" alt="" />
        </div>
      </div>
      <ul class="fl">
        <li>
          <p>公司简介</p>
          <a href="javascript:;" @click="linkTo('/aboutUs?tab=companyInfo')">公司介绍</a>
          <a href="javascript:;" @click="linkTo('/aboutUs?tab=companyHistory')">公司历程</a>
          <a href="javascript:;" @click="linkTo('/aboutUs?tab=enterpriseArchitecture')">组织架构</a>
        </li>
        <li>
          <p>公司动态</p>
          <a href="javascript:;" @click="linkTo('/companyDynamics?tab=dynamicNews')">公司新闻动态</a>
          <a href="javascript:;" @click="linkTo('/companyDynamics?tab=partyBuildingNews')">党建新闻</a>
          <a href="javascript:;" @click="linkTo('companyDynamics?tab=announcement')">通知公告</a>
        </li>
        <li>
          <p>招标信息</p>
          <a href="javascript:;" @click="linkTo('/biddingInformation?tab=purchaseAnnouncement')">采购公告</a>
          <a href="javascript:;" @click="linkTo('/biddingInformation?tab=procurementResults')">采购结果</a>
          <a href="javascript:;" @click="linkTo('/biddingInformation?tab=changeNotification')">更改通知</a>
        </li>
      </ul>
     
    </div>
     <p class="bottom_text">版权所有：广西博施隆海  桂ICP备10200667号</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {
    linkTo(url){
      this.$router.push({
        path:url
      })
    }
  },
};
</script>
<style lang='less' scoped>
.footer {
  box-sizing: border-box;
  clear: both;
  width: 100%;
  padding-bottom: 40px;
  padding-left: 200px;
  padding-right: 200px;
  height: 342px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: rgba(49, 59, 79, 1);
  .fl {
    float: left;
  }
  .footone {
    box-sizing: border-box;
    flex: 1;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    background-color: rgba(49, 59, 79, 1);
    ul li {
      float: left;
      margin-top: 52px;
      margin-left: 20px;
      padding-right: 20px;
      width: 165px;
      text-align: center;
      position: relative;
      p{
        padding-bottom: 20px;
        color: rgba(255, 255, 255, 1);
        font-size: 16px;
        text-align: center;
        font-weight: bold;
      }
      &::after{
        position: absolute;
        right:0;
        top: 30px;
        content: ' ';
        height: 92px;
        border-right: 1px solid rgba(0, 122, 255, 1);
      }
      a {
        display: block;
        color: #fff;
        font-size: 14px;
        line-height: 26px;
        padding-bottom: 12px;
      }
      a:hover {
        color: #ffcf46;
      }
    }
    .ftonr_r {
      font-size: 14px;
      color: #fff;
      margin-left: 0;
      h2 {
        font-size: 24px;
        font-weight: normal;
        padding-top: 56px;
        margin: 0px;
        color: rgba(39, 183, 255, 1);
      }
      p {
        margin: 10px 0px;
        color: rgba(39, 183, 255, 1);
      }
      img {
        width: 120px;
        height: 120px;
        margin-top: 8px;
      }
    }
  }
  .bottom_text{
    text-align: center;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
  }
}
</style>