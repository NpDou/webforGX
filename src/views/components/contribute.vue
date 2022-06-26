<template>
    <div class="contribute">
        <div class="border-class item">
            <p class="num">2021<span class="unit">年</span></p>
            <p class="detail">公司创立于2021年</p>
        </div>
        <div class="border-class item">
            <p class="num">4<span class="unit">个</span></p>
            <p class="detail">已成功交易4个项目</p>
        </div>
        <div class="border-class item">
            <p class="num">2<span class="unit">家</span></p>
            <p class="detail">为2家采购单位提供解决方案</p>
        </div>
        <div class="item">
            <p class="num">2<span class="unit">个</span></p>
            <p class="detail">注册供应商达2个</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'contribute',
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>
<style lang='less' scoped>
.contribute{
  display: flex;
  padding: 45px;
  .item{
    display: inline-block;
    flex: 1;
    text-align: center;
    .num{
      color: rgba(0, 122, 255, 1);
      font-size: 48px;
      .unit{
        font-size: 14px;
        color: #000;
      }
    }
    .detail{
      color: rgba(174, 174, 174, 1);
      font-size: 14px;
    }
  }
  .border-class{
    position: relative;
    &::after{
      content: ' ';
      display: block;
      height: 76px;
      width: 1px;
      background: rgba(227, 227, 227, 1);
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>