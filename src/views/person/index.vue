<template>
    <el-container class="person">
        <el-container>
            <el-aside width="300px">
                <div class="personLogo">
                    <el-upload class="avatar-uploader" :action="uploadAction" :show-file-list="false" accept=".jpg"
                        :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <p class="companyName" @click="toHome">{{userInfo.supplierName}}</p>
                </div>
                <el-menu default-active="1-1" :default-openeds="openeds" class="el-menu-vertical-demo" @select="chose">
                    <el-menu-item index="home">
                        <template slot="title">
                            <i class="el-icon-user-solid"></i>
                            <span>个人中心</span>
                        </template></el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>信息设置</span>
                        </template>
                        <el-menu-item index="accountInfo">账号信息</el-menu-item>
                        <el-menu-item index="companyInfo">企业信息</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-message"></i>
                            <span>我的响应</span>
                        </template>
                        <el-menu-item index="result">采购结果</el-menu-item>
                        <el-menu-item index="systemRecommendation">系统推荐</el-menu-item>
                        <el-menu-item index="changeNotificationforperson">更改通知</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <component :userInfo="userInfo" :is="result" @viewMore="viewMore" :id="articleId" @gotoDetail="gotoDetail"></component>
            </el-main>
        </el-container>
        <el-footer>
            <p>若发现您的权益受到侵害，请立即联系客服，我们会尽快为您处理</p>
            <p>京ICP证030173号 京网文[2013]0934-983号 Copyright ©2022 Baidu | 用户协议 | 联系客服</p>
        </el-footer>
    </el-container>
</template>
<script>
import result from "./components/result.vue"
import accountInfo from "./components/accountInfo.vue"
import companyInfo from "./components/companyInfo.vue"
import systemRecommendation from "./components/systemRecommendation.vue"
import detail from "./components/detail.vue"
import home from "./components/home.vue"
import changeNotificationforperson from "./components/changeNotificationforperson.vue"
import { get, post } from "../../utils/request";
import {
    mapActions,
    mapGetters
} from "vuex";
export default {
    name: "person",
    components: {
        result,
        accountInfo,
        companyInfo,
        systemRecommendation,
        home,
        detail,
        changeNotificationforperson,
    },
    data() {
        return {
            openeds: ['1', '2'],
            imageUrl: '',
            result: '',
            uploadAction: `${process.env.VUE_APP_SERVER_URL}/api/file`,
            userInfo:{},
            articleId:null
        }
    },
    computed: {
        ...mapGetters(['userInfo_vuex']),
    },
    watch:{
        userInfo_vuex:{
            deep:true,
            handler(){
                if(sessionStorage.getItem("SESSIONID")){
                    this.userInfo=JSON.parse(sessionStorage.getItem("SESSIONID"))
                    this.imageUrl=this.userInfo.buddha?`${process.env.VUE_APP_SERVER_URL}/api/file/download?idFile=${this.userInfo.buddha}`:''
                }
            }
        }
    },
    methods: {
        toHome(){
            this.result = 'home'
        },
        chose(key, keyPath) {
            this.result = key
        },
        viewMore(val) {
            if (val) {
                this.result = 'changeNotificationforperson'
                window.scrollTo(0, 0)
            } else {
                this.result = 'systemRecommendation'
                window.scrollTo(0, 0)
            }
        },
        handleAvatarSuccess(res, file) {
            let fileId=file.response&&file.response.data?(file.response.data.id||''):''
            if(fileId){
                post(`/api/gys/supplier/uploadBuddha?fileId=${fileId}&supplierId=${this.userInfo.id}`).then(res=>{
                    if(res.code==20000){
                        this.imageUrl = URL.createObjectURL(file.raw);
                        this.$message.success('上传头像成功');
                        post('/api/gys/supplier/getSupplierById',{id:this.userInfo.id}).then(res1=>{
                            if(res1.code==20000){
                                this.setSessionItem("SESSIONID", JSON.stringify(res1.data));
                            }
                        })
                    }
                })
            }else{
                this.$message.error('上传头像失败');
            }
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2Mb!');
            }
            return isJPG && isLt2M;
        },
        gotoDetail(id){
            this.articleId = id
            this.result='detail'
        }
    },
    mounted(){
        if(sessionStorage.getItem("SESSIONID")){
            this.userInfo=JSON.parse(sessionStorage.getItem("SESSIONID"))
            this.imageUrl=this.userInfo.buddha?`${process.env.VUE_APP_SERVER_URL}/api/file/download?idFile=${this.userInfo.buddha}`:''
            this.result='home'
            post('/api/gys/supplier/getSupplierById',{id:this.userInfo.id}).then(res=>{
                if(res.code==20000){
                    this.setSessionItem("SESSIONID", JSON.stringify(res.data));
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.person {
    padding: 17px 120px;
    background: #f5f6f7;
    min-height: 100%;

    :deep(.el-main ){
        padding-top: 0;
        padding-bottom: 0;
    }

    :deep(.el-aside ){
        display: flex;
        flex-direction: column;
    }

    :deep(.el-menu ){
        flex: 1;
        border: 0 none;
    }

    :deep(.personLogo ){
        background: #fff;
        text-align: center;
        margin-bottom: 16px;
        padding: 16px 0;

        .companyName {
            color: rgba(16, 16, 16, 1);
            font-size: 18px;
            font-family: SourceHanSansSC-regular;
            margin: 13px 0;
        }
    }
}

.el-footer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: rgba(145, 145, 145, 100);
    font-size: 12px;
    background: #fff;
    margin-top: 34px;
}

:deep( .avatar-uploader .el-upload ){
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

:deep( .avatar-uploader .el-upload:hover ){
    border-color: #409EFF;
}

:deep( .avatar-uploader-icon ){
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
}

:deep( .avatar ){
    width: 60px;
    height: 60px;
    display: block;
}
</style>