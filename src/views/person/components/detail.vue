<template>
    <div class="detail">
        <div class="title">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item >我的响应</el-breadcrumb-item>
                <el-breadcrumb-item >采购结果</el-breadcrumb-item>
                <el-breadcrumb-item >详情</el-breadcrumb-item>
            </el-breadcrumb>
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
                :type="detail.zbdw?(detail.zbdw === userInfo.id ? 'success' : 'danger') : 'primary'"
                disable-transitions>{{detail.zbdw?detail.zbdw.id === userInfo.id ? '已中标' : '未中标' : '未开标'}}</el-tag>
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
            detail:{}
        }
    },
    computed:{
       
    },
    props: {
        userInfo: {
            type: Object,
            default() {
                return {}
            }
        },
        id: {
            type: Number,
            default() {
                return null
            }
        }
    },
    methods:{
        download(item){
            window.open(`${process.env.VUE_APP_SERVER_URL}/api/file/download?idFile=${item.id}`)
        },
        getDetail(){
            get('/api/article/getArticleById', {id:this.id}).then(res => {
                this.detail=res.data
                this.content = res.data.content
            })
        },
    },
    mounted(){
        this.getDetail()
    }
}
</script>
<style lang="less" scoped>
    .detail{
        min-height: 50vh;
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
</style>