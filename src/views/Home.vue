<template>
  <div>
    <!-- 轮播图 -->
    <Banner></Banner>
    <contribute />
    <brandIntroduction />
    <service />
    <biddingInformation />
    <div class="flexBox">
      <div class="flexBoxItem"><companyNews /></div>
      <div class="flexBoxItem"><partyBuildingNews /></div>
    </div>
    <notice />
    <contactUs />
  </div>
</template>

<script>
// import '@/assets/js/index.js'

import Banner from "../components/Banner.vue";
import contribute from "./components/contribute.vue";
import brandIntroduction from "./components/brandIntroduction.vue";
import service from "./components/service.vue";
import biddingInformation from "./components/biddingInformation.vue";
import partyBuildingNews from "./components/partyBuildingNews.vue";
import companyNews from "./components/companyNews";
import notice from "./components/notice";
import contactUs from "./components/contactUs";

export default {
  components: {
    Banner,
    contribute,
    brandIntroduction,
    service,
    biddingInformation,
    companyNews,
    partyBuildingNews,
    notice,
    contactUs,
  },
  data() {
    return {
      carousel: [],
      option1: {
        titCell: ".hd ul li",
        mainCell: ".bd ul",
        autoPlay: true,
        effect: "left",
        autoPlay: true,
        scroll: 3,
        vis: 3,
        trigger: "click",
      },
    };
  },
  created() {
  },

  methods: {
  },
};
</script>
<style lang="less" scoped>
// 主体一
.slideBox {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 56px;
}
.flexBox{
  display: flex;
  justify-content: space-between;
  width: 100%;
  .flexBoxItem{
    width: 48%;
  }
}
.mainOne {
  width: 100%;
  background-size: cover;
  margin-top: 60px;
  .wrap {
    width: 1200px;
    margin: 0 auto;
    padding: 40px;
  }
}


/* @media screen and (min-width: 960px) and (max-width: 1200px) {
  .el-carousel__item {
    width: 1200px;
    background-color: #ccc;
  }
} */
</style>