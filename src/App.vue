<template>
  <div id="app">
    <Head></Head>
    <router-view v-if="isRouterAlive"/>
    <Foot></Foot>
  </div>
</template>
<script>
import Head from "./views/components/Head.vue";
import Foot from "./views/components/Foot.vue";

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


</style>