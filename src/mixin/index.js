import search from '@/components/search.vue'
import myList from "@/components/myList.vue";
import myTable from "@/components/myTable.vue";
import {
    mapActions,
    mapGetters
} from "vuex";
export default {
    components: {
        search,
        myList,
        myTable
    },
    computed:{
        ...mapGetters(['allArticleData'])
    },
    methods: {
        ...mapActions('allArticle', ['getAllArticleData']),
        onsearch(params) {
            this.params.title = params.name
            this.params.startDate = params.date[0] || ''
            this.params.endDate = params.date[1] || ''
            this.fetchData()
        },
        handleSizeChange(val) {
            this.size = val
            this.fetchData()

        },
        handleCurrentChange(val) {
            this.page = val
            this.fetchData()

        }
    },
    mounted() {
        this.fetchData()
    }
};