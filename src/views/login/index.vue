<template>
    <div class="backContent">
        <div class="formContent">
            <p class="title">欢迎登录广西博施隆海</p>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="" prop="name">
                    <el-input placeholder="请输入用户名" v-model="ruleForm.name" autocomplete="off">
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
                <span>忘记密码</span>
            </div>
        </div>
        <p class="footerText">版权所有：广西博施隆海  桂ICP备10200667号</p>
    </div>
</template>

<script>
const Base64 = require("js-base64").Base64
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
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                name: '',
                password: '',
            },
            rules: {
                name: [
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
                    if (this.checked) {
                        let password = Base64.encode(this.ruleForm.password); // base64加密
                        localStorage.setItem("name", this.ruleForm.name);
                        localStorage.setItem("password", password);
                        localStorage.setItem("time", new Date().getTime() + 86400000 * 15);
                    } else {
                        localStorage.removeItem("userId");
                        localStorage.removeItem("password");
                        localStorage.removeItem("time");
                    }
                    alert('submit!');
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
        let username = localStorage.getItem("name");
        if (username) {
            this.ruleForm.name = localStorage.getItem("name");
            this.ruleForm.password = Base64.decode(localStorage.getItem("password"));// base64解密
            this.checked = true;
        }
    }
}
</script>
<style lang="less" scoped>
    .backContent{
        height: 100%;
        width: 100%;
        background-image: url(../../assets/yxtx/banner.jpg);
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
            /deep/ .el-form-item{
                margin-bottom: 30px;
            }
            .title{
                color: rgba(16, 16, 16, 100);
                font-size: 24px;
                text-align: center;
                margin-bottom: 30px;
            }
            /deep/ .el-button{
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
</style>