<template>
    <el-container class="person">
        <el-container>
            <el-aside width="300px">
            <div class="personLogo">
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    accept=".jpg"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <p class="companyName">XXXXXX有限责任公司</p>
            </div>
            <el-menu
            default-active="1-1"
            :default-openeds="openeds"
            class="el-menu-vertical-demo"
            @select="chose">
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
            </el-submenu>
            </el-menu>
        </el-aside>
            <el-main>
                <component :is="result" @viewMore="viewMore"></component>
            </el-main>
        </el-container>
        <el-footer>
            <p>若发现您的权益受到侵害，请立即联系客服，我们会尽快为您处理</p>
            <p>京ICP证030173号 京网文[2013]0934-983号 Copyright ©2022 Baidu  | 用户协议  | 联系客服</p>
        </el-footer>
    </el-container>
</template>
<script>
import result from "./components/result.vue"
import accountInfo from "./components/accountInfo.vue"
import companyInfo from "./components/companyInfo.vue"
import systemRecommendation from "./components/systemRecommendation.vue"
import home from "./components/home.vue"
export default {
    name:"person",
    components:{
        result,
        accountInfo,
        companyInfo,
        systemRecommendation,
        home,
    },
    data(){
        return{
            resultObj:{
                
            },
            openeds:['1','2'],
            imageUrl:'',
            result:'home'
        }
    },
    computed:{
    },
    methods:{
        chose(key, keyPath) {
            this.result=key
        },
        viewMore(val){
            if(val){

            }else{
                this.result='systemRecommendation'
                window.scrollTo(0,0)
            }
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
      
    }
}
</script>
<style lang="less" scoped>
    .person{
        padding: 17px 120px;
         background: #f9f9f9;
         min-height: 100%;
         /deep/.el-main{
            padding-top: 0;
            padding-bottom: 0;
         }
         /deep/.el-aside{
            display: flex;
            flex-direction: column;
         }
         /deep/.el-menu{
            flex: 1;
            border: 0 none;
         }
         /deep/.personLogo{
            background: #fff;
            text-align: center;
            margin-bottom: 16px;
            padding: 16px 0;
            .companyName{
                color: rgba(16, 16, 16, 1);
                font-size: 18px;
                font-family: SourceHanSansSC-regular;
                margin: 13px 0;
            }
         }
    }
    .el-footer{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        color: rgba(145, 145, 145, 100);
        font-size: 12px;
        background: #fff;
        margin-top: 34px;
    }
  /deep/ .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  /deep/ .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  /deep/ .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  /deep/ .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
</style>