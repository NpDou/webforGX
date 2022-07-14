<template>
    <div class="setInfo">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="供应商名称：" prop="supplierName">
                        <el-input v-model="ruleForm.supplierName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="统一社会信用代码：" prop="code">
                        <el-input v-model="ruleForm.code"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="企业性质：" prop="qyxz">
                        <el-select v-model="ruleForm.qyxz" placeholder="请选择企业性质">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="登记机关：" prop="djjg">
                        <el-input v-model="ruleForm.djjg"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="经营状态：" prop="jyStatus">
                        <el-select v-model="ruleForm.jyStatus" placeholder="请选择经营状态">
                            <el-option label="存续" value="存续"></el-option>
                            <el-option label="在业" value="在业"></el-option>
                            <el-option label="吊销" value="吊销"></el-option>
                            <el-option label="注销" value="注销"></el-option>
                            <el-option label="迁入" value="迁入"></el-option>
                            <el-option label="迁出" value="迁出"></el-option>
                            <el-option label="停业" value="停业"></el-option>
                            <el-option label="清算" value="清算"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="经营期限：" prop="jyqx">
                        <el-date-picker
                            v-model="ruleForm.jyqx"
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
                    <el-form-item label="经营地址：" prop="address">
                        <el-input v-model="ruleForm.address"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="注册资金：" prop="zczj">
                        <el-input v-model="ruleForm.zczj"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="供应商类型：" prop="supplierType">
                        <el-select v-model="ruleForm.supplierType" placeholder="请选择供应商类型">
                            <el-option label="施工单位" value="施工单位"></el-option>
                            <el-option label="设计单位" value="设计单位"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="银行账号：" prop="bankAccount">
                        <el-input v-model="ruleForm.bankAccount"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="开户行名称：" prop="khhmc">
                        <el-input v-model="ruleForm.khhmc"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="单位详细地址：" prop="dwxxdz">
                        <el-input v-model="ruleForm.dwxxdz"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="法人代表姓名：" prop="personName">
                        <el-input v-model="ruleForm.personName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="法人联系方式：" prop="personPhone">
                        <el-input v-model="ruleForm.personPhone"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="经营范围：" prop="businessScope">
                        <el-input type="textarea" v-model="ruleForm.businessScope"></el-input>
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
                callback(new Error('法人联系方式不能为空！'));
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
                supplierName:'',//供应商名称
                code:'',//统一社会信用代码
                qyxz:'',//企业性质
                djjg:'',//登记机关
                jyStatus:'',//经营状态
                jyqx:[],//经营期限
                address:'',//经营地址
                zczj:'',//注册资金
                supplierType: '',//供应商类型
                bankAccount:'',//银行账户
                khhmc:'',//开户行名称
                dwxxdz:'',//单位详细地址
                personName:'',//法人代表姓名
                personPhone:'',//法人联系方式
                businessScope:'',//经营范围
            },
            rules: {
                supplierName: [
                    { required: true, message: '请输入供应商名称', trigger: 'blur' },
                ],
                code: [
                    { required: true, message:'请输入统一社会信用代码', trigger: 'blur' },
                ],
                qyxz: [
                    { required: true, message: '请选择企业性质', trigger: 'change' },
                ],
                djjg: [
                    { required: true, message: '请输入登记机关', trigger: 'blur' },
                ],
                jyStatus: [
                    { required: true, message: '请选择经营状态', trigger: 'change' },
                ],
                jyqx: [
                    { required: true, message: '请输入经营期限', trigger: 'change' },
                ],
                address: [
                    { required: true, message: '请输入经营地址', trigger: 'blur' },
                ],
                zczj: [
                    { required: true, message: '请输入注册资金', trigger: 'blur' },
                ],
                supplierType: [
                    { required: true, message: '请选择供应商类型', trigger: 'change' },
                ],
                bankAccount: [
                    { required: true, message: '请输入银行账户', trigger: 'blur' },
                ],
                khhmc: [
                    { required: true, message: '请输入开户行名称', trigger: 'blur' },
                ],
                dwxxdz: [
                    { required: true, message: '请输入单位详细地址', trigger: 'blur' },
                ],
                personName: [
                    { required: true, message: '请输入法人代表姓名', trigger: 'blur' },
                ],
                personPhone: [
                    { required: true, validator: validatePhone, trigger: 'blur' },
                ],
                businessScope: [
                    { required: true, message: '请输入经营范围', trigger: 'blur' },
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