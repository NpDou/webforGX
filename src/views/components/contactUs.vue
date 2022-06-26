<template>
  <div class="contactUs">
    <div class="info">
        <p class="title">联系我们</p>
        <p class="text"><i class="el-icon-location icon"></i>广西南宁市西乡塘区秀厢大道69号欧亚达家居（南宁正合商场）1号楼6楼</p>
        <p class="text"><i class="el-icon-phone icon"></i>0771-5601506</p>
        <p class="text"><i class="el-icon-message icon"></i>2945686859@qq.com</p>
    </div>
    <div class="map">
        <img src="../../assets/yxtx/banner.jpg" alt="">
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