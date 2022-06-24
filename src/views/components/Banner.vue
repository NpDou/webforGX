<template>
  <div>
    <!-- 轮播图 -->
    <div class="banner">
      <el-carousel height="460px" arrow="never" ref="cardShow">
        <el-carousel-item v-for="(item, index) in carousel" :key="index">
          <img src="../../assets/yxtx/banner.jpg" title="我还没有链接，哈哈哈，就这样吧！" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 主体部分 -->
    <div class="mainOne">
      <div class="wrap">

      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils/request";
export default {
  data() {
    return {
      carousel: [{
        introduce:'2222'
      },{
        introduce:'2222'
      },],
    };
  },
  created() {
  },

  methods: {
    // 获取轮播图图片
    getCarousel() {
      get("/index/carousel/findAll").then((res) => {
        if (res.status == 200) {
          this.carousel = res.data;
        } else {
          this.$message({
            type: "error",
            message: res.message,
          });
        }
      });
    },
    // 自定义箭头
    arrowClick(val) {
      if (val === "right") {
        this.$refs.cardShow.next();
      } else {
        this.$refs.cardShow.prev();
      }
    },
  },
};
</script>
<style lang="less" scoped>
// 轮播图
.banner {
  // height: 460px;
  position: relative;
  .el-carousel__item {
    width: 100%;
    background-color: #ccc;
    img {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
  .bottom_bg {
    left: 0;
    height: 58px;
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #fff;
    font-size: 16px;
    line-height: 58px;
    background: rgba(0, 0, 0, 0.6);
    .title {
      width: 1190px;
      margin: 0 auto;
    }
  }
  /deep/.el-carousel__indicators {
    z-index: 999;
  }
  .arrow {
    position: absolute;
    bottom: 6px;
    left: 0;
    width: 95%;
    z-index: 99;
    .leftArrow {
      float: right;
      display: inline-block;
      width: 42px;
      height: 42px;
      margin-right: 15px;
      background: url("../../assets/yxtx/bg-left.png");
    }
    .leftArrow:hover {
      background: url("../../assets/yxtx/left.png");
      cursor: pointer;
    }
    .rightArrow {
      float: right;
      display: inline-block;
      width: 42px;
      height: 42px;
      background: url("../../assets/yxtx/bg-right.png");
    }
    .rightArrow:hover {
      background: url("../../assets/yxtx/right.png");
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1200px) {
    .el-carousel__item {
      width: 1200px;
      background-color: #ccc;
    }
    .arrow {
      width: 1140px;
      position: absolute;
      bottom: 6px;
      left: 0;
    }
    .leftArrow {
      float: right;
    }
    .rightArrow {
      float: right;
    }
  }
}


</style>