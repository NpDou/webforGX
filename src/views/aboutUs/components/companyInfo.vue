<template>
  <div class="companyInfo">
    <div class="fristContent">
      <div class="img" >
        <img src="../../../assets/building.png" alt="">
      </div>
      <div class="container">
        <p class="title">公司介绍</p>
        <p>广西博施隆海投资有限公司成立于 2021 年，注册资本：5000万，地址位于广西南宁市，<span>公司致力于乡村振兴，土地综合治理。</span> 公司内设七个部门（综合办公室、技术部、投融部、工程部、商务部、财务部、合规部）</p>
        <br />
        <p><span>下设全资子公司有：</span>兴安博施隆海农业科技有限公司，来宾市兴宾区博施隆海农业科技有限公司，龙州博施隆海农业科技有限公司，隆安博施隆海农业科技有限公司，全州博施隆海农业科技有限公司。</p>
        <br />
        <p><span>主要经营业务范围：</span>房地产开发经营；建设工程设计；水产养殖；食品互联网销售；食品经营；施工专业作业。</p>
        <br />
        <p><span> 一般项目:</span> 土地整治服务;建筑材料销售:日用百货销售;机械设备销售:五金产品零售:仪器仪表销售:橡胶制品销售:消防器材销售:农业机械销售;谷物销售;牲台销售;农副产品销售;肥料销售:农、林、牧、副、渔业专业机械的销售;农作物栽培服务。</p>
      </div>
    </div>
    <div class="secondContent">
      <p>公司于2021年投资合作“<span>隆安县耕地提质改造（旱改水）项目</span>”，面积12000亩；于2022年投资合作“<span>兴安县土地综合整治（旱改水）项目</span>”，面积5000亩；于2022年投资合作“<span>来宾市兴宾区土地综合整治（旱改水）项目</span>”，面积5000亩；于2022年投资合作“<span>龙州县土地综合整治（旱改水）项目</span>”，面积20000亩；于2022年投资合作“<span>全州县土地综合整治（旱改水）项目</span>”，面积15000亩。</p>
    </div>
    <div class="thirdContent">
        <img src="../../../assets/meetting.png" alt="">
        <img src="../../../assets/map.png" alt="">
    </div>
    <p style="padding: 10px 0">按照集团要求，<span>公司立足南宁，布局广西，面向全国，开展助力乡村振兴行动，推动经济和地方产业融合发展，助力县域经济发展壮大。</span></p>
    <p style="padding-bottom: 30px">公司将紧密围绕国家战略，秉承“<span>专业、诚信、创新、合作、共赢</span>”的企业精神，不断推动技术进步、促进产业升级、助力经济的健康发展。
</p>
  </div>
</template>
<script>
  export default {
    name:"companyInfo",
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style lang="less">
.companyInfo{
  p{
    span{
      font-size: 18px;
      font-weight: bold;
      color: rgba(16, 16, 16, 100);
    }
    color: #676161;
    font-size: 17px;
    line-height: 28px;
    text-indent: 2em;
  }
  width: 100%;
  padding: 50px 102px;
  box-sizing: border-box;
  .fristContent{
    width: 100%;
    display: flex;
    padding-bottom: 20px;
    .img{
      width: 573px;
      height: 446px;
      animation: fadeInAnimation ease 0.5s; 
      animation-iteration-count: 1;
      animation-fill-mode: forwards; 
      @keyframes fadeInAnimation { 
        0% { 
            transform: translate3d(0,0,0) rotateX(270deg); 
        } 
        60% { 
            transform: translate3d(0,0,0) rotateX(360deg); 
        } 
        70% { 
            transform: translate3d(0,0,0) rotateX(380deg); 
        } 
        80% { 
            transform: translate3d(0,0,0) rotateX(400deg); 
        } 
        90% { 
            transform: translate3d(0,0,0) rotateX(380deg); 
        } 
        100% { 
            transform: translate3d(0,0,0) rotateX(360deg); 
        }
      } 
      img{
        width: 573px;
        height: 446px;
      }
    }
    .container{
      flex: 1;
      padding-left: 28px;
      
      .title{
        color: rgba(0, 122, 255, 100);
        font-size: 28px;
        text-indent: 0em;
        padding: 14px;
        padding-top: 0;
      }
    }
  }
  .thirdContent{
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    img{
      width: 573px;
      height: 429px;
    }
  }
}
</style>