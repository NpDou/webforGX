<template>
    <div class="setInfo">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="供应商名称：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="统一社会信用代码：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="企业性质：">
                        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="登记机关：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="经营状态：">
                        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="经营期限：">
                        <el-date-picker
                            v-model="ruleForm.region"
                            type="datetimerange"
                            :picker-options="pickerOptions"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            align="right">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="经营地址：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="注册资金：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="供应商类型：">
                        <el-select v-model="ruleForm.region" placeholder="请选择供应商类型">
                            <el-option label="类型一" value="shanghai"></el-option>
                            <el-option label="类型二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="银行账号：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="开户行名称：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="单位详细地址：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="法人代表姓名：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="法人联系方式：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="经营范围：" prop="name">
                        <el-input type="textarea" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
  export default {
    name: "setInfo",
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.psd) {
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
            pickerOptions: {
            shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
            ruleForm: {
                name: '',
                psd: '',
                checkpsd: '',
                manageName: '',
                manageEmail: '',
                managePhone: '',
                manageTel: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ],
                psd: [
                    { required: true, validator: validatePass, trigger: 'blur' },
                ],
                checkpsd: [
                    { required: true, validator: validatePass2, trigger: 'blur' },
                ],
                manageName: [
                    { required: true, message: '请输入管理员姓名', trigger: 'blur' },
                ],
                manageEmail: [
                    { required: true, validator: checkEmail, trigger: 'blur' },
                ],
                managePhone: [
                    { required: true, validator: validatePhone, trigger: 'blur' },
                ],
                manageTel: [
                    { required: true, message: '请输入管理员电话', trigger: 'blur' },
                ],
            }
        };
    },
    methods: {
      submitForm(formName,cb) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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
    .setInfo{
        padding: 60px 56px;
        background: #fff;
        /deep/.el-select{
            width: 100%;
        }
        /deep/.el-range-editor.el-input__inner{
            width: 100%;
        }
    }
</style>