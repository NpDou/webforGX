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
                            <el-option v-for="(item,index) in option" :key="index" :label="item" :value="item">{{item}}</el-option>
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
                            type="daterange"
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd"
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
                            <el-option label="监理单位" value="监理单位"></el-option>
                            <el-option label="复核单位" value="复核单位"></el-option>
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
import { get, post } from "@/utils/request";

  export default {
    name: "setInfo",
    data() {
        var verifySupplierName = (rule, value, callback)=>{
            if(value == ''){
                callback(new Error('请输入用户名'));
            } else {
                get("/api/gys/supplier/verifySupplierName", {
                    supplierName: value,
                }).then(res=>{
                    if(res.success){
                        callback();
                    } else{
                    callback(new Error('供应商名称已存在'));
                    }
                })
            }
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
            option:[                            
"内资",
"国有全资",
"集体全资",
"股份合作",
"联营",
"国有联营",
"集体联营",
"国有与集体联营",
"其他联营",
"有限责任（公司）",
"其他有限责任（公司）",
"股份有限（公司）",
"私有",
"私有独资",
"私有合资",
"私营有限责任（公司）",
"私营股份有有限（公司）",
"个体经营",
"其他私有",
"其他内资",
"港、澳、台合资",
"内地和港、澳、台合资",
"内地和港、澳、台合作",
"港、澳、台、独资",
"港、澳、台投资股份有限（公司）",
"其他港、澳、台投资",
"国外投资",
"中外合资",
"中外合作",
"外资",
"国外投资股份有限（公司）",
"其他国外投资"],
            
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
                    { required: true, validator: verifySupplierName, trigger: 'blur' },
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
        :deep(.el-select){
            width: 100%;
        }
        :deep(.el-range-editor.el-input__inner){
            width: 100%;
        }
    }
</style>