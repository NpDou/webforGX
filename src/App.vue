<template>
  <div id="app" :class="haveFooter?'app':'app appFlex'">
    <Head></Head>
    <div :class="haveFooter?'main':'main mainFlex'">
      <router-view class="mainContent" v-if="isRouterAlive"/>
      <Foot v-if="haveFooter"></Foot>
    </div>
    <el-backtop v-if="hasSrollTop"></el-backtop>
  </div>
</template>
<script>
import Head from "./components/Head.vue";
import Foot from "./components/Foot.vue";
import { mapActions } from "vuex";
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
      noFooters: ['login','register','person','person_detail','person_home','person_accountInfo','person_companyInfo','person_systemRecommendation','person_changeNotificationforperson','person_result'],
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
    let time = localStorage.getItem(`${process.env.VUE_APP_SERVER_URL}-time`);
    let today = new Date().getTime()
    if(today > time){
      localStorage.removeItem(`${process.env.VUE_APP_SERVER_URL}-account`);
      localStorage.removeItem(`${process.env.VUE_APP_SERVER_URL}-password`);
      localStorage.removeItem(`${process.env.VUE_APP_SERVER_URL}-time`);
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
  background: #f5f6f7;
}
#app{
  min-width: 1200px;
  height: 100%;
}
.main{
  padding-top: 114px;
  background: #f5f6f7;
}
.mainFlex{
  height: 100%;
  box-sizing: border-box;
}
.appFlex{
  height: 100%;
}
.mainContent{
    min-width: 1200px;
    max-width: 1500px;
    background: #fff;
    margin: auto;
  }
</style>