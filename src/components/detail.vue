<template>
    <div class="detail">
        <div class="title">
            <div class="header">
                <p class="fade">
                    <span>助力乡村振兴行动</span>
                    <span>推动经济和地方产业融合发展</span>
                </p>
            </div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="(item,index) in tabs[type]" :key="index" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content" v-html="content"></div>
    </div>
</template>
<script>
import { get } from "@/utils/request";
export default {
    name:'detail',
    data(){
        return {
            dict:{
                announcement:'公告',
                partyBuildingNews:'新闻',
                dynamicNews:'新闻',
                purchaseAnnouncement:'公告',
                procurementResults:'结果',
                changeNotification:'通知',
            },
            dictMenu:{
                announcement:'通知公告',
                partyBuildingNews:'党建新闻',
                dynamicNews:'动态新闻',
                purchaseAnnouncement:'采购公告',
                procurementResults:'采购结果',
                changeNotification:'更改通知',
            },
            tab:'',
            type:'',
            content:'',
            
        }
    },
    computed:{
        tabs(){
            return {
                companyDynamics:[
                    {
                        name:'动态资讯',
                        path:'/companyDynamics'
                    },
                    {
                        name:this.dictMenu[this.tab],
                        path:'/companyDynamics?tab='+this.tab
                    },
                    {
                        name:this.dict[this.tab],
                    }
                ],
                biddingInformation:[
                    {
                        name:'招标信息',
                        path:'/biddingInformation'
                    },
                    {
                        name:this.dictMenu[this.tab],
                        path:'/biddingInformation?tab='+this.tab
                    },
                    {
                        name:this.dict[this.tab],
                    }
                ],
                home:[
                    {
                        name:'首页',
                        path:'/home'
                    },
                    {
                        name:this.dict[this.tab],
                    }
                ]
            }
        }
    },
    methods:{
        getDetail(){
            get('/api/article/getArticleById', {id:this.$route.query.id}).then(res => {
                console.log(res);
                this.content = res.data.content
            })
        }
    },
    mounted(){
        this.getDetail()
        this.tab=this.$route.query.tab
        this.id=this.$route.query.id
        this.type=this.$route.query.type
        console.log(this.$route);
    }
}
</script>
<style lang="less" scoped>
    .detail{
        min-height: 50vh;
        .header{
            background-image: url(../assets/background-1.png);
            width: 100%;
            height: 150px;
            line-height: 150px;
            background-position: 100% 100%;
            background-repeat: no-repeat;
            background-size: cover;
            .fade{
            color: rgba(255, 255, 255, 10);
            font-size: 38px;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: fadeInAnimation ease 2s; 
            animation-iteration-count: 1; /*设置动画播放次数*/
            animation-fill-mode: forwards; /*设置样式以在动画不播放时应用元素。forward是设置动画结束后，使用元素的结束属性值*/
            span{
                padding: 0 30px;
            }
            }
            @keyframes fadeInAnimation { 
                0% { 
                    opacity: 0; /*设置不透明度*/
                } 
                100% { 
                    opacity: 1; 
                } 
            }
            
        }
        .content{
            padding: 20px 200px;
        }
    }
    .el-breadcrumb{
        background-color: rgba(246, 252, 255, 1);
        padding: 20px 100px;
    }
</style>