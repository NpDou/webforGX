<template>
  <div class="notice">
    <headerTitle content="通知公告" url="/companyDynamics?tab=announcement" class="title" />
    <div class="container">
        <myTable tab="announcement" type="home" :tableData="allArticleData.announcement.records"/>
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
    name: "notice",
  data() {
    return {
      params:{
        idChannel:3,
        startDate:'',
        title:'',
        endDate:'',
        publish: 1,
        page:1,
        size:20,
      }
    };
  },
  components:{
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
        key:'announcement',
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
.notice{
    .container{
        padding: 0 40px;
    }
}
  
</style>