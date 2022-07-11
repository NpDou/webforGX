<template>
  <div class="partyBuildingNews">
    <headerTitle content="党建新闻" url="/companyDynamics?tab=partyBuildingNews" class="title" />
    <div class="container">
        <myTable />
    </div>
  </div>
</template>

<script>
import headerTitle from "@/components/headerTitle.vue";
import myTable from "@/components/myTable.vue";

export default {
    name: "partyBuildingNews",
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
   
  },
};
</script>
<style lang="less" scoped>
.partyBuildingNews{
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