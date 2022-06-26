<template>
  <div class="service">
    <div class="header">
        <span class="line"></span>
        <span class="title">以客户为中心 竭诚为您服务</span>
        <span class="line"></span>
    </div>
    <div class="content">
        <div class="item">
            <div class="imgBox">
                 <img src="../../assets/yxtx/banner.jpg" alt="">
                <p class="cover"></p>
            </div>
            <p class="title">土地综合整治</p>
        </div>
        <div class="item">
            <div class="imgBox">
                 <img src="../../assets/yxtx/banner.jpg" alt="">
                <p class="cover"></p>
            </div>
            <p class="title">乡村振兴</p>
        </div>
        <div class="item">
            <div class="imgBox">
                 <img src="../../assets/yxtx/banner.jpg" alt="">
                <p class="cover"></p>
            </div>
            <p class="title">集中采购</p>
        </div>
        <div class="item">
            <div class="imgBox">
                 <img src="../../assets/yxtx/banner.jpg" alt="">
                <p class="cover"></p>
            </div>
            <p class="title">种植管护服务</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "service",
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
    .service{
        margin-top: 67px;
        margin-bottom: 30px;
        .header{
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: 51px;
        }
        span{
            flex: 1;
        }
        .line{
            height: 1px;
            background: #007AFF;
        }
        .title{
            color: rgba(0, 122, 255, 1);
            font-size: 22px;
            text-align: center;
            font-family: Roboto;
        }
        .content{
            display: flex;
            padding: 0 148px;
            justify-content: space-between;
            .item{
                width: 240px;
                img{
                    width: 240px;
                    height: 160px;
                    vertical-align: bottom;
                }
                .title{
                    color: rgba(24, 144, 255, 1);
                    font-size: 18px;
                    text-align: center;
                    padding: 19px 0;
                    font-family: HarmonyOS_Sans_SC-regular;
                }
                .imgBox{
                    position: relative;
                    .cover{
                        bottom: 0;
                        left: 0;
                        right: 0;
                        display: block;
                        height: 10px;
                        background-color: rgba(0, 122, 255,0.7);
                        position: absolute;
                    }
                }
            }
        }
    }
</style>