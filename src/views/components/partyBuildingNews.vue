<template>
  <div class="partyBuildingNews">
    <headerTitle content="党建新闻" url="/companyDynamics?tab=partyBuildingNews" class="title" />
    <div class="container">
        <myTable :tableData="allArticleData.dynamicNews.records"/>
    </div>
  </div>
</template>

<script>
import headerTitle from "@/components/headerTitle.vue";
import myTable from "@/components/myTable.vue";
import {
    mapActions,
    mapGetters
} from "vuex";
export default {
    name: "partyBuildingNews",
  data() {
    return {
      params:{
        idChannel:2,
        startDate:'',
        title:'',
        endDate:'',
        page:1,
        size:20,
      }
    };
  },
  components:{
    headerTitle,
    myTable
  },
  computed:{
    ...mapGetters(['allArticleData']),
  },
  methods: {
    ...mapActions('allArticle', ['getAllArticleData']),
    fetchData(){
      this.getAllArticleData({
        key:'partyBuildingNews',
        params:{...this.params}
      })
    },
  },
  mounted(){
    this.fetchData()
  }
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