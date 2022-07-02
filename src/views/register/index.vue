<template>
    <div class="register">
        <div class="registerMain" v-if="agree">
            <div class="step">
                <el-steps :active="active" finish-status="success">
                    <el-step title="设置账号" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="填写资料" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="上传资料" description="这段就没那么长了"></el-step>
                </el-steps>
            </div>
            <div class="content">
                <setaccount v-if="active==0" ref="setaccount" />
                <setInfo v-if="active==1" ref="setInfo" />
                <upload v-if="active==2" ref="upload" />
                <div class="registerAction">
                    <button v-if="active==0" class="cancel" @click="goback">取消</button>
                    <button v-if="active!=0" @click="prevStep">上一步</button>
                    <button v-if="active!=2" @click="nextStep">下一步</button>
                    <button v-if="active==2" @click="nextStep">提交</button>
                </div>
            </div>
        </div>
        <agreement v-else @agree="agreeFun" @cancle="goback" />
    </div>
</template>

<script>
import agreement from './components/agreement.vue';
import setaccount from './components/setaccount.vue';
import setInfo from './components/setInfo.vue';
import upload from './components/upload.vue';

export default {
    name: "register",
    data() {
        return {
            agree:true,
            active: 2,
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
            this.$refs.setaccount&&this.$refs.setaccount.submitForm('ruleForm',this.next())
        }
        if (this.active==1) {
            this.$refs.setInfo&&this.$refs.setInfo.submitForm('ruleForm',this.next())
        }
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