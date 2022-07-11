<template>
  <div class="headerTitle">
    <div class="title">{{content}}</div>
    <div v-if="url" class="more" @click="linkTo">更多</div>
  </div>
</template>

<script>
export default {
    name: "headerTitle",
    props:['content','url'],
  data() {
    return {
      
    };
  },
  created() {
  },

  methods: {
    linkTo(){
      this.$router.push({
        path:this.url
      })
    }
  },
};
</script>
<style lang="less" scoped>
  .headerTitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid;
    height: 70px;
    color: rgba(0, 122, 255, 1);
    font-size: 22px;
    padding-left: 60px;
    padding-right: 60px;
    border-color: rgba(0, 122, 255, 0.7);
    margin-bottom: 15px;
    font-weight: bold;
    .more{
      color: rgb(204, 202, 202);
      font-size: 14px;
      cursor: pointer;
    }
  }
</style>