<template>
    <div class="brandIntroduction">
        <div class="maincontainer">
            <p class="title">品牌介绍</p>
            <div class="content">
                广西博施隆海投资有限公司成立于 2021 年，地址位于广西南宁市，公司致力于乡村振兴，土地综合治理。
自成立以来公司主营业务以土地综合整治、项目投资管理等业务。公司不断完善发展战略，优化资产结构，逐步构建起具有良好发展前景的产业等战略布局。
<br />
<br />
<br />
照集团要求，公司立足南宁，布局广西，面向全国，开展助力乡村振兴行动，推动经济和地方产业融合发展，助力县域经济发展壮大。
<br />
<br />
<br />
公司将紧密围绕国家战略，秉承“专业、诚信、创新、合作、共赢”的企业精神，不断推动技术进步、促进产业升级、助力经济的健康发展。
            </div>
        </div>
        <div class="imageBox">
            <img src="../../assets/Introduction.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name:'brandIntroduction',
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>
<style lang='less' scoped>
.brandIntroduction{
    position: relative;
    .maincontainer{
        box-sizing: border-box;
        width: 70%;
        padding: 25px 225px 25px 70px;
        height: 385px;
        line-height: 20px;
        background-color: rgba(71, 116, 182, 1);
        .title{
            color: rgba(255, 255, 255, 1);
            font-size: 22px;
            margin-bottom: 30px;
        }
        .content{
            color: rgba(255, 255, 255, 1);
            font-size: 16px;
        }
    }
    .imageBox{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 539px;
        height: 295px;
        img{
            height: 100%;
            width: 100%;
        }
    }
}
</style>