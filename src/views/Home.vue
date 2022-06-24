<template>
  <div>
    <!-- 轮播图 -->
    <Banner></Banner>
  </div>
</template>

<script>
// import '@/assets/js/index.js'

import Banner from "./components/Banner.vue";
export default {
  components: {
    Banner,
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
.mainOne {
  width: 100%;
  background: url("../assets/yxtx/main_bg.jpg") no-repeat center;
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