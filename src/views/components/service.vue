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
                 <img src="../../assets/banner1.png" alt="">
                <p class="cover">土地开发整理、土地整理复垦开发、土地整理复垦、土地整治、土地综合整治、农村土地整治、土地开发整理复垦等，对田、水、路、林、村进行综合整治，增加有效耕地面积，提高土地质量和利用效率。</p>
            </div>
            <p class="title">土地综合整治</p>
        </div>
        <div class="item">
            <div class="imgBox">
                 <img src="../../assets/banner1.png" alt="">
                <p class="cover">推进农用地整理、建设用地整理和乡村生态保护修复，有利于统筹农用地、低效建设用地和生态保护修复，促进耕地保护和土地节约集约利用，解决一二三产融合发展用地问题，改善农村生态环境，助力乡村振兴。</p>
            </div>
            <p class="title">乡村振兴</p>
        </div>
        <div class="item">
            <div class="imgBox">
                 <img src="../../assets/banner1.png" alt="">
                <p class="cover">集中采购是指采购中将集中采购目录内的货物、工程、服务集中进行采购，集中采购包括集中采购机构采购和部门集中采购，目录内属于通用的采购项目，委托集中采购机构代理采购。</p>
            </div>
            <p class="title">集中采购</p>
        </div>
        <div class="item">
            <div class="imgBox">
                 <img src="../../assets/banner1.png" alt="">
                <p class="cover">根据现状的自然、经济条件，充分合理地利用农业资源，处理作物与作物间、作物与土壤间的关系尽量采用先进技术实行科学种田用地养地紧密结合保持良好的农业生态环境达到稳产高产、年年丰收的目的。</p>
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
                    overflow: hidden;
                    .cover{
                        bottom: 0;
                        left: 0;
                        right: 0;
                        display: block;
                        top: 150px;
                        background-color: rgba(0, 122, 255,0.7);
                        position: absolute;
                        overflow: hidden;
                        padding: 10px;
                        color: #fff;
                        box-sizing: border-box;
                        transition: top 0.5s;
                        -moz-transition: top 0.5s; /* Firefox 4 */
                        -webkit-transition: top 0.5s; /* Safari 和 Chrome */
                        -o-transition: top 0.5s; /* Opera */
                    }
                    &:hover{
                        .cover{
                            top: 0;
                        }
                    }
                }
            }
        }
    }
</style>