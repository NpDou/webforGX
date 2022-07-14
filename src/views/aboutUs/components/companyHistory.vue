<template>
  <div class="companyHistory">
        <div class="container">

        </div>
  </div>
</template>
<script>
  export default {
    name:"companyHistory",
    data() {
      return {
      };
    },
    methods: {
      
    }
  };
</script>
<style lang="less">
.companyHistory{
  width: 100%;
  padding: 50px 102px;
  box-sizing: border-box;
  display: flex;

  .container{
    flex: 1;
    height: 562px;
    background: url(../../../assets/history.png);
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;

  }
}
</style>