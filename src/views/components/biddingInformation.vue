<template>
  <div class="biddingInformation">
    <headerTitle content="招标信息" :url="url" class="title" />
    <div class="container">
      <div class="tab">
        <span @click="choseTab(1)" :class="['tabItem', 1 == activeTab ? 'active' : '']">采购信息</span>
        <span @click="choseTab(2)" :class="['tabItem', 2 == activeTab ? 'active' : '']">采购结果</span>
        <span @click="choseTab(3)" :class="['tabItem', 3 == activeTab ? 'active' : '']">通知公告</span>
      </div>
      <myTable :tab="tabDict[activeTab]" type="home" :autoScroll="true" :tableData="allArticleData[tabDict[activeTab]].records"/>
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
  name: "biddingInformation",
  data() {
    return {
      activeTab: 1,
      tabDict: {
        '1': 'purchaseAnnouncement',
        '2': 'procurementResults',
        '3': 'changeNotification',
      },
      tabDict_type: {
        '1': 4,
        '2': 5,
        '3': 6,
      },
    };
  },
  components: {
    headerTitle,
    myTable
  },
  created() {
  },
  computed: {
    ...mapGetters(['allArticleData']),
    url() {
      let url = ''
      switch (this.activeTab) {
        case 1:
          url = "/biddingInformation?tab=purchaseAnnouncement"
          break;
        case 2:
          url = "/biddingInformation?tab=procurementResults"
          break;
        case 3:
          url = "/biddingInformation?tab=changeNotification"
          break;
        default:
          url = "/"
          break;
      }
      return url
    },
    params() {
      return {
        idChannel: this.tabDict_type[this.activeTab],
        startDate: '',
        publish: 1,
        title: '',
        endDate: '',
        page: 1,
        size: 20,
      }
    },
  },
  methods: {
    ...mapActions('allArticle', ['getAllArticleData']),
    choseTab(tab) {
      this.activeTab = tab
      this.fetchData()
    },
    fetchData() {
      this.getAllArticleData({
        key: this.tabDict[this.activeTab],
        params: { ...this.params }
      })
    },
  },
  mounted() {
    this.fetchData()
  }
};
</script>
<style lang="less" scoped>
.biddingInformation {
  .container {
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