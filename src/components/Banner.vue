<template>
  <div>
    <!-- 轮播图 -->
    <div class="banner">
      <el-carousel height="460px" :interval="4000" @change="banerChange" ref="cardShow">
        <el-carousel-item v-for="(item, index) in carousel" :key="index+'676'">
          <img src="../assets/yxtx/banner.jpg" title="我还没有链接，哈哈哈，就这样吧！" />
          
        </el-carousel-item>
      </el-carousel>
      <div :class="carouselIndex%2==0?'cover':'cover2'">
        <div class="content">
          <h2>博施隆海投资</h2>
          <p>立足南宁，布局广西，面向全国服务经验丰富，安全有保障优质服务值得您信赖</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../utils/request";
export default {
  data() {
    return {
      carouselIndex:0,
      carousel: [{
        introduce:'2222'
      },{
        introduce:'2222'
      },{
        introduce:'2222'
      },{
        introduce:'2222'
      },],
    };
  },
  created() {
  },

  methods: {
    banerChange(index){
      this.carouselIndex=index
    },
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
  overflow: hidden;
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
  .cover{
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(56, 148, 255, 0.5);
    animation: right 0.6s ease-in both;
  }
  @keyframes left{
    from{
      right: -40%;
      left: 100%
    }
    to{
      right: 0;
      left: 40%
    }
  }
   @keyframes right{
    from{
      right: 100%;
      left: -60%
    }
    to{
      left: 0;
      right: 40%;
    }
  }
   .cover2{
      overflow: hidden;
      position: absolute;
      top: 0;
      z-index: 9;
      bottom: 0;
      animation: left 0.6s ease-in both;
      background-color: rgba(56, 148, 255, 0.5);
    }
    .content{
      color: #fff;
      padding: 60px 119px;
      h2{
        font-size: 60px;
        margin: 20px 0;
      }
      p{
        font-size: 20px;
        padding-right: 300px;
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