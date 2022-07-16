<template>
    <div class="backContent">
        <div class="formContent">
            <p class="title">欢迎登录广西博施隆海</p>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="" prop="account">
                    <el-input placeholder="请输入用户名" v-model="ruleForm.account" autocomplete="off">
                    <i slot="prefix" class="el-input__icon el-icon-user-solid"></i></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input placeholder="请输入密码" type="password" v-model="ruleForm.password" autocomplete="off">
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i></el-input>
                </el-form-item>
                <div class="remenberPsd">
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                </div>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
            <div class="otherAction">
                <span @click="register">注册账号</span>
                <span @click="centerDialogVisible = true">忘记密码</span>
            </div>
        </div>
        <p class="footerText">版权所有：广西博施隆海  桂ICP备10200667号</p>
        <el-dialog
            title="欢迎登录广西博施隆海"
            :visible.sync="centerDialogVisible"
            width="360px"
            center>
            <p class="centerContent">忘记密码请联系客服进行修改</p>
            <p class="centerContent">客服咨询热线：0771-5601506</p>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
const Base64 = require("js-base64").Base64
import { post } from "../../utils/request";
export default {
    name: 'login',
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        var validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                callback();
            }
        };
        return {
            centerDialogVisible:false,
            ruleForm: {
                account: '',
                password: '',
            },
            rules: {
                account: [
                    { validator: validateName, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
            },
            checked:false,
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    post('/api/gys/supplier/supplierLogin',this.ruleForm).then(res=>{
                        if(res.code==20000){
                            if (this.checked) {
                                let password = Base64.encode(this.ruleForm.password); // base64加密
                                localStorage.setItem(`${process.env.VUE_APP_SERVER_URL}-account`, this.ruleForm.account);
                                localStorage.setItem(`${process.env.VUE_APP_SERVER_URL}-password`, password);
                                localStorage.setItem(`${process.env.VUE_APP_SERVER_URL}-time`, new Date().getTime() + 86400000 * 15);
                            } else {
                                localStorage.removeItem(`${process.env.VUE_APP_SERVER_URL}-account`);
                                localStorage.removeItem(`${process.env.VUE_APP_SERVER_URL}-password`);
                                localStorage.removeItem(`${process.env.VUE_APP_SERVER_URL}-time`);
                            }
                            this.setSessionItem("SESSIONID", JSON.stringify(res.data));
                            if(this.$route.query.back){
                                this.$router.go(-1)
                            }else{
                                this.$router.push('/person')
                            }
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        register(){
            this.$router.push({
                name: 'register'
            })
        }
    },
    mounted(){
        let username = localStorage.getItem(`${process.env.VUE_APP_SERVER_URL}-account`);
        if (username) {
            this.ruleForm.account = localStorage.getItem(`${process.env.VUE_APP_SERVER_URL}-account`);
            this.ruleForm.password = Base64.decode(localStorage.getItem(`${process.env.VUE_APP_SERVER_URL}-password`));// base64解密
            this.checked = true;
        }
    }
}
</script>
<style lang="less" scoped>
    .backContent{
        height: 100%;
        width: 100%;
        background-image: url(../../assets/login_bg.png);
        background-origin: 100% 100%;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        .footerText{
            position: absolute;
            bottom: 0;
            width: 100%;
            text-align: center;
            padding-bottom: 30px;
            color: rgba(255, 255, 255, 100);
            font-size: 14px;
            font-family: SourceHanSansSC-regular;
        }
        .formContent{
            width: 360px;
            height: 400px;
            background: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
            border-radius: 3px;
            padding: 30px 38px;
            box-sizing: border-box;
            :deep( .el-form-item){
                margin-bottom: 30px;
            }
            .title{
                color: rgba(16, 16, 16, 100);
                font-size: 24px;
                text-align: center;
                margin-bottom: 30px;
            }
            :deep( .el-button){
                width: 100%;
            }
            .remenberPsd{
                margin-bottom: 30px;
                color: rgba(16, 16, 16, 100);
                font-size: 14px;
            }
            .otherAction{
                width: 100%;
                span{
                    display: inline-block;
                    cursor: pointer;
                    width: 50%;
                    color: rgba(0, 122, 255, 100);
                    font-size: 14px;
                    &:first-child{
                        text-align: left;
                        position: relative;
                        &::after{
                            content: ' ';
                            height: 20px;
                            border-right: 1px solid rgba(187, 187, 187, 1);;
                            position: absolute;
                            right: 0;
                            top: 0;
                        }
                    }
                    &:last-child{
                        text-align: right;
                    }
                }
            }
        }
    }
    .centerContent{
        text-align: center;
        padding: 20px;
    }
</style>