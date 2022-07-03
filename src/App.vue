<template>
  <div id="app" :class="haveFooter?'app':'app appFlex'">
    <Head></Head>
    <div :class="haveFooter?'main':'main mainFlex'">
      <router-view v-if="isRouterAlive"/>
      <Foot v-if="haveFooter"></Foot>
    </div>
    <el-backtop v-if="hasSrollTop"></el-backtop>
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
      noFooters: ['login','register','person'],
      isRouterAlive:true
    }
  },
  computed:{
    haveFooter(){
      if(this.noFooters.indexOf(this.$route.name) > -1){
        return false
      }
      return true
    },
    hasSrollTop(){
      return this.$route.meta.scrollToTop
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
  mounted(){
    let time = localStorage.getItem("time");
    let today = new Date().getTime()
    if(today > time){
      localStorage.removeItem("userId");
      localStorage.removeItem("password");
      localStorage.removeItem("time");
    }
  }
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
.mainFlex{
  height: 100%;
  box-sizing: border-box;
}
.appFlex{
  height: 100%;
}

</style>