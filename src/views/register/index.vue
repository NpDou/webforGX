<template>
    <div class="register">
        <div class="registerMain" v-if="agree">
            <div class="step">
                <el-steps :active="active" finish-status="success">
                    <el-step title="设置账号" description=""></el-step>
                    <el-step title="填写资料" description=""></el-step>
                    <el-step title="上传资料" description=""></el-step>
                </el-steps>
            </div>
            <div class="content">
                <setaccount v-show="active==0" ref="setaccount" />
                <setInfo v-show="active==1" ref="setInfo" />
                <upload v-show="active==2" ref="upload" />
                <div class="registerAction">
                    <button v-if="active==0" class="cancel" @click="goback">取消</button>
                    <button v-if="active!=0" @click="prevStep">上一步</button>
                    <button v-if="active!=2" @click="nextStep">下一步</button>
                    <button v-if="active==2" @click="nextStep">提交</button>
                </div>
            </div>
        </div>
        <agreement v-else @agree="agreeFun" @cancel="goback" />
    </div>
</template>

<script>
import { post } from '../../utils/request';
import agreement from './components/agreement.vue';
import setaccount from './components/setaccount.vue';
import setInfo from './components/setInfo.vue';
import upload from './components/upload.vue';
//              account:this.form.account,//用户名
//                   password:this.form.password,//密码
//                   name:this.form.name,//账号管理员姓名
//                   email:this.form.email,//账号管理员邮箱
//                   cellphone:this.form.cellphone,//账号管理员手机
//                   telephone:this.form.telephone,//账号管理员电话
//                   supplierName:this.form.supplierName,//供应商名称
//                   code:this.form.code,//统一社会信用代码
//                   qyxz:this.form.qyxz,//企业性质
//                   djjg:this.form.djjg,//登记机关
//                   jyStatus:this.form.jyStatus,//经营状态
//                   jyqx:this.form.jyqx?this.form.jyqx.toString():'',//经营期限
//                   address:this.form.address,//经营地址
//                   zczj:this.form.zczj,//注册资金
//                   supplierType: this.form.supplierType,//供应商类型
//                   bankAccount:this.form.bankAccount,//银行账户
//                   khhmc:this.form.khhmc,//开户行名称
//                   dwxxdz:this.form.dwxxdz,//单位详细地址
//                   personName:this.form.personName,//法人代表姓名
//                   personPhone:this.form.personPhone,//法人联系方式
//                   businessScope:this.form.businessScope,//经营范围
//                   yyzz:this.form.yyzz,//营业执照id
//                   aqscxkz:this.form.aqscxkz,//安全生产许可证id
//                   zzzsIds:this.zzzs.toString(),//资质证书id集合
//                   xgyjIds:this.xgyj.toString(),//相关业绩id集合
//                   qycxzzIds:this.qycxzz.toString(),//企业诚信资质id集合
export default {
    name: "register",
    data() {
        return {
            agree:true,
            active: 0,
        };
    },
    components:{
        agreement,
        setaccount,
        setInfo,
        upload,
    },
    created() {
    },

    methods: {
      agreeFun(){
        this.agree = true
      },
      goback(){
        this.$router.go(-1)
      },
      next(){
        this.active++
      },
      nextStep(){
        if (this.active==0) {
            this.$refs.setaccount&&this.$refs.setaccount.submitForm('ruleForm',this.next)
        }
        if (this.active==1) {
            this.$refs.setInfo&&this.$refs.setInfo.submitForm('ruleForm',this.next)
        }
        if (this.active==2) {
            this.$refs.upload&&this.$refs.upload.submitForm('ruleForm',this.submit)
        }
      },
      submit(){
        let params={...this.$refs.setaccount.ruleForm,...this.$refs.setInfo.ruleForm,...this.$refs.upload.ruleForm}
        params.jyqx=params.jyqx.join(',')
        post('/api/gys/supplier/add',params).then(res=>{
            if(res.code==20000){
                this.$message.success('注册成功，两秒后跳转登录页')
                setTimeout(()=>{
                    this.$router.push('/login')
                },2000)
            }else{
                this.$message.error('注册失败！')
            }

        })
      },
      prevStep(){
        this.active--
      }
    },
};
</script>
<style lang="less" scoped>
.register {
    .step{
        padding: 30px 120px;
        background: #fff;
    }
    .content{
        padding: 26px 120px;
        background: #f9f9f9;
    }
   .registerAction{
        text-align: center;
        background: #fff;
        padding-bottom: 40px;
        button{
            width: 170px;
            height: 55px;
            line-height: 26px;
            border-radius: 3px;
            background-color: rgba(0, 122, 255, 1);
            color: rgba(255, 255, 255, 1);
            font-size: 18px;
            text-align: center;
            font-family: Roboto;
            border: 0 none;
            margin: 0 36px;
        }
        .cancel{
            background-color: rgba(206, 206, 206, 1);
        }
   }
}
</style>