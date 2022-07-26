<template>
    <div class="detail">
        <div class="title">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item >我的响应</el-breadcrumb-item>
                <el-breadcrumb-item >采购结果</el-breadcrumb-item>
                <el-breadcrumb-item >详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="pageList">
            <div class="listItem">
                <div class="type">更改通知：</div>
                <div class="list">
                    <p v-for="(item,key) in this.pageList.info" :key="'info' + key" @click="gotoDetail(item,'changeNotification','personhome')">
                        <span class="title">{{item.title}}</span>
                        <span class="time">{{item.modifyTime}}</span>
                    </p>
                </div>
            </div>
            <div class="listItem">
                <div class="type">采购结果：</div>
                <div class="list">
                    <p v-for="(item,key) in this.pageList.result" :key="'result' + key" @click="gotoDetail(item,'changeNotification','personhome')">
                        <span class="title">{{item.title}}</span>
                        <span class="time">{{item.modifyTime}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="content" v-html="content"></div>
        <div class="fileInfos" v-if="detail.fileInfos&&detail.fileInfos.length>0">
            附件信息
            <ul >
                <li v-for="(item, index) in detail.fileInfos" @click="download(item)" :key="index">
                    {{item.originalFileName}}
                </li>
            </ul>
        </div>
        <div class="action">
            <el-tag
                :type="detail.zbdw?(detail.zbdw === id ? 'success' : 'danger') : 'primary'"
                disable-transitions>{{detail.zbdw?detail.zbdw.id === id ? '已中标' : '未中标' : '未开标'}}</el-tag>
        </div>
    </div>
</template>
<script>
import { get,post } from "@/utils/request";
export default {
    name:'detail',
    data(){
        return {
            content:'',
            detail:{},
            pageList:{
                result:[],
                info:[],
            },
            pid:'',
            id:''
        }
    },
    computed:{
       
    },
    methods:{
        download(item){
            window.open(`${process.env.VUE_APP_SERVER_URL}/api/file/download?idFile=${item.id}`)
        },
        gotoDetail(item,tab,type){
            this.$router.push({
                path:'/detail',
                query:{
                    id:item.id,
                    tab:tab,
                    type:type
                }
            })
        },
        getDetail(){
            get('/api/article/getArticleById', {id:this.pid}).then(res => {
                this.detail=res.data
                this.content = res.data.content
            })
            post('/api/article/getArticleListById', {pid:this.pid}).then(res => {
                const data=res.data
                this.pageList.info=[]
                this.pageList.result=[]
                data.forEach(element => {
                    if(element.idChannel==6){
                        this.pageList.info.push(element)
                    }
                    if(element.idChannel==5){
                        this.pageList.result.push(element)
                    }
                });
            })
        },
    },
    mounted(){
        this.pid=this.$route.query.pid
        this.id=this.$route.query.id
        this.getDetail()
    }
}
</script>
<style lang="less" scoped>
    .detail{
        min-height: 50vh;
            background: #fff;

        .content{
            background: #fff;
            padding: 20px 26px;
        }
        .action{
            text-align: right;
            padding: 40px 26px;
            background: #fff;
            button{
                width: 197px;
                height: 40px;
                border-radius: 4px;
                background-color: rgba(0, 130, 250, 1);
                color: rgba(255, 255, 255, 1);
                font-size: 14px;
                text-align: center;
                font-family: Microsoft Yahei;
                border: 0 none;
            }
            .disableBtn{
                width: 197px;
                height: 40px;
                border-radius: 4px;
                background-color: rgba(145, 145, 145, 1);
            }
            p{
                color: rgba(255, 0, 0, 100);
                font-size: 14px;
                font-family: SourceHanSansSC-regular;
            }
        }
    }
    .fileInfos{
        background: #fff;
        padding: 20px;
        ul{
            li{
                padding: 15px 0;
                font-size: 14px;
                color: #2295FF;
                cursor: pointer;
                text-align: left;
                font-family: SourceHanSansSC-regular;
            }
        }
    }
    .el-breadcrumb{
        background-color: rgba(246, 252, 255, 1);
        padding: 20px 26px;
    }
    .pageList{
        background: #fff;
        border: 1px solid #2295FF;
        margin: 20px;
        padding: 0px 20px;
        .listItem{
            display: flex;
            padding: 20px 0px;
            border-bottom: 1px solid #ccc;
            &:last-child{
                border-bottom: 0 none;
            }
            .type{
                width: 100px;
                text-align: right;
            }
            .list{
                flex: 1;
                p{
                    color: #0189ec;
                    display: flex;
                    justify-content: space-between;
                    .time{
                        width: 200px;
                        text-align: right;
                    }
                    .title{
                        flex: 1;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>