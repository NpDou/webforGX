<template>
  <div class="companyNews">
    <headerTitle content="公司动态新闻" url="/companyDynamics?tab=dynamicNews" class="title" />
    <div class="container">
      <myTable tab="dynamicNews" type="home" :tableData="allArticleData.dynamicNews.records"/>
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
  name: "companyNews",
  data() {
    return {
      params:{
        idChannel:1,
        startDate:'',
        title:'',
        endDate:'',
        publish: 1,
        page:1,
        size:20,
      }
    };
  },
  components: {
    headerTitle,
    myTable
  },
  created() {
  },
  computed:{
    ...mapGetters(['allArticleData']),
  },
  methods: {
    ...mapActions('allArticle', ['getAllArticleData']),
    fetchData(){
      this.getAllArticleData({
        key:'dynamicNews',
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
.companyNews {
  .container {
    padding: 0 40px;
  }
}
</style>