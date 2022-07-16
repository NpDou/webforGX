<template>
  <div class="contactUs">
    <div class="info">
        <p class="title">联系我们</p>
        <p class="text"><i class="el-icon-location icon"></i>广西南宁市西乡塘区秀厢大道69号欧亚达家居（南宁正合商场）1号楼6楼</p>
        <p class="text"><i class="el-icon-phone icon"></i>0771-5601506</p>
        <p class="text"><i class="el-icon-message icon"></i>2945686859@qq.com</p>
    </div>
    <div class="map" @click="gotoMap">
        <img src="../../assets/location.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name: "contactUs",
    props:['tableData','page'],
  data() {
    return {
      
    };
  },
  created() {
  },

  methods: {
    gotoMap(){
      window.open("http://api.map.baidu.com/marker?location=22.858619,108.306404&title=%E7%9B%AE%E7%9A%84%E4%BD%8D%E7%BD%AE&content=%E5%B9%BF%E8%A5%BF%E5%8D%9A%E6%96%BD%E9%9A%86%E6%B5%B7%E6%8A%95%E8%B5%84%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&output=html&src=webapp.baidu.openAPIdemo")
    }
  },
};
</script>
<style lang="less" scoped>
  .contactUs{
    padding: 28px 55px;
    box-sizing: border-box;
    padding-bottom: 30px;
    width: 100%;
    display: flex;
    .info{
        flex: 1;
        .title{
            color: rgba(0, 122, 255, 1);
            padding: 20px 0;
            font-size: 22px;
            font-family: SourceHanSansSC-bold;
            font-weight: bold;
        }
        .text{
            .icon{
                margin-right: 5px;
                font-size: 20px;
                vertical-align: bottom;
                color: rgba(0, 122, 255, 1);;
            }
            color: rgba(102, 102, 102, 1);
            padding: 20px 0;
            font-size: 16px;
            text-align: left;
            font-family: SourceHanSansSC-regular;
        }
    }
    .map{
        flex: 1;
        img{
            width: 100%;
            height: 334px;
        }
    }
    
  }
</style>