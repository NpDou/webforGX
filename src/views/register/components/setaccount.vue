<template>
    <div class="setaccount">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
            <el-form-item label="用户名：" prop="account">
                <el-input autocomplete="new-account" v-model="ruleForm.account"></el-input>
            </el-form-item>
            <el-form-item autocomplete="new-password" show-password label="密码：" prop="password">
                <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item  label="确认密码：" prop="checkpsd">
                <el-input type="password" v-model="ruleForm.checkpsd"></el-input>
            </el-form-item>
            <el-form-item label="账号管理员姓名：" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="账号管理员邮箱：" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="账号管理员手机：" prop="cellphone">
                <el-input oninput="if(isNaN(value)) { value = null }" v-model="ruleForm.cellphone"></el-input>
            </el-form-item>
            <el-form-item label="账号管理员电话：" prop="telephone">
                <el-input oninput="if(isNaN(value)) { value = null }" v-model="ruleForm.telephone"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { get, post } from "@/utils/request";

  export default {
    name: "setaccount",
    data() {
        var verifyAccount = (rule, value, callback)=>{
            if(value&&value.trim() == '' || !value){
                callback(new Error('请输入用户名'));
            } else {
                get("/api/gys/supplier/verifyAccount", {
                    account: value,
                }).then(res=>{
                    if(res.success){
                        callback();
                    } else{
                    callback(new Error('用户名已存在'));
                    }
                })
            }
        }
        
        var validatePass = (rule, value, callback) => {
            const passwordReg = /(?=.*[a-z_])(?=.*\d)(?=.*[^a-z0-9_])[\S]{6,}/i
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if(passwordReg.test(value)){
                    callback()
                }else{
                    callback(new Error('密码格式不规范，至少包含大小写字母、数字、特殊字符大于6个字符,请重新填写！'))
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        var checkEmail = (rule, value, callback) => {
            const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
            if (!value) {
                return callback(new Error('邮箱不能为空'))
            }
            setTimeout(() => {
                if (mailReg.test(value)) {
                    callback()
                } else {
                    callback(new Error('请输入正确的邮箱格式'))
                }
            }, 100)
        }
        let validatePhone = (rule,value,callback)=>{
            if (!value){
                callback(new Error('手机号不能为空！'));
            }
            //使用正则表达式进行验证手机号码
            if (!/^1[3456789]\d{9}$/.test(value)){
                callback(new Error('手机号不正确！'));
            }else{
                callback()
            }
        };
        return {

            ruleForm: {
                name: '',
                password: '',
                checkpsd: '',
                name: '',
                email: '',
                cellphone: '',
                telephone: '',
            },
            rules: {
                account: [
                    { required: true, validator: verifyAccount, trigger: 'blur' },
                ],
                password: [
                    { required: true, validator: validatePass, trigger: 'blur' },
                ],
                checkpsd: [
                    { required: true, validator: validatePass2, trigger: 'blur' },
                ],
                name: [
                    { required: true, message: '请输入管理员姓名', trigger: 'blur' },
                ],
                email: [
                    { required: true, validator: checkEmail, trigger: 'blur' },
                ],
                cellphone: [
                    { required: true, validator: validatePhone, trigger: 'blur' },
                ],
                telephone: [
                    { required: true, message: '请输入管理员电话', trigger: 'blur' },
                ],
            }
        };
    },
    methods: {
      submitForm(formName,cb) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            cb&&cb()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>
<style lang="less" scoped>
    .setaccount{
        padding: 60px 254px;
        background: #fff;
    }
</style>