<template>
  <div id="app">
    <Head></Head>
    <div class="main">
      <router-view v-if="isRouterAlive"/>
      <Foot></Foot>
    </div>
  </div>
</template>
<script>
import Head from "./components/Head.vue";
import Foot from "./components/Foot.vue";

export default {
  components: {
    Head,
    Foot,
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  data() {
    return {
      isRouterAlive:true
    }
  },
  methods: {
    reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
          this.isRouterAlive = true
       })
    }
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
.main{
  padding-top: 114px;
}


</style>