<template>
  <div class="biddingInformation">
    <headerTitle content="招标信息" url="/" class="title" />
    <div class="container">
        <div class="tab">
            <span @click="choseTab(1)" :class="['tabItem',1==activeTab?'active':'']">采购信息</span>
            <span @click="choseTab(2)" :class="['tabItem',2==activeTab?'active':'']">采购结果</span>
            <span @click="choseTab(3)" :class="['tabItem',3==activeTab?'active':'']">通知公告</span>
        </div>
        <myTable />
    </div>
  </div>
</template>

<script>
import headerTitle from "@/components/headerTitle.vue";
import myTable from "@/components/myTable.vue";

export default {
    name: "biddingInformation",
  data() {
    return {
      activeTab:1,
    };
  },
  components:{
    headerTitle,
    myTable
  },
  created() {
  },

  methods: {
    choseTab(tab){
        this.activeTab=tab
    }
  },
};
</script>
<style lang="less" scoped>
.biddingInformation{
    .container{
        padding: 0 40px;
        .tab{
            padding: 20px 0;
            .tabItem{
                display: inline-block;
                width: 127px;
                height: 35px;
                line-height: 35px;
                border-radius: 32px;
                text-align: center;
                
            }
            .active{
                background-color: rgba(226, 240, 255, 100);
            }

        }
    }
}
  
</style>