<template>
    <div class="tipContent">
        <div class="tip">
            <p class="title">用户注册服务协议</p>
            一、用户须知
            <br />
            （一）在此特别提醒用户在注册成为___________用户之前，请认真阅读本《___________用户服务协议》（以下简称“协议”）。确保用户充分理解本协议中各条款，请审慎阅读并选择接受或不接受本协议。同意并点击确认本协议条款且完成注册程序后，才能成为___________的正式注册用户，并享受___________的各类服务。注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。若不同意本协议，或对本协议中的条款存在任何疑问，请立即停止___________用户注册程序，并可以选择不使用本网站服务。
            <br />
            （二）本协议约定___________与用户之间关于“___________”服务（以下简称“服务”）的权利义务。“用户”是指注册、登录、使用本服务的个人、单位。本协议可由___________随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知，用户可在本网页中查阅最新版协议条款。在修改协议条款后，如果用户不接受修改后的条款，请立即停止使用___________提供的服务，用户继续使用___________提供的服务将被视为接受修改后的协议。
            <br />
            二、账号注册
            <br />
            （一）用户在使用本服务前需要注册一个“___________”账号。“___________”账号应当使用手机号码绑定注册，请用户使用尚未与“___________”账号绑定的手机号码，以及未被___________根据本协议封禁的手机号码注册“___________”账号。___________可以根据用户需求或产品需要对账号注册和绑定的方式进行变更，而无须事先通知用户。
            <br />
            （二）如果注册申请者有被___________封禁的先例或涉嫌虚假注册及滥用他人名义注册，及其他不能得到许可的理由，___________将拒绝其注册申请。
            <br />
            （三）鉴于“___________”账号的绑定注册方式，用户同意___________在注册时将允许用户的手机号码及手机设备识别码等信息用于注册。
            <br />
            （四）在用户注册及使用本服务时，___________需要搜集能识别用户身份的个人信息以便___________可以在必要时联系用户，或为用户提供更好的使用体验。___________搜集的信息包括但不限于用户的姓名、地址；___________同意对这些信息的使用将受限于第三条用户个人隐私信息保护的约束。
            <br />
            三、账户安全
            <br />
            （一）用户一旦注册成功，成为___________的用户，将得到一个用户名和密码，并有权利使用自己的用户名及密码随时登陆___________。
            <br />
            （二）用户对用户名和密码的安全负全部责任，同时对以其用户名进行的所有活动和事件负全责。
            <br />
            （三）用户不得以任何形式擅自转让或授权他人使用自己的___________用户名。
            <br />
            （四）用户对密码加以妥善保管，切勿将密码告知他人，因密码保管不善而造成的所有损失由用户自行承担。
            <br />
            （五）如果用户泄漏了密码，有可能导致不利的法律后果，因此不管任何原因导致用户的密码安全受到威胁，应该立即和___________客服人员取得联系，否则后果自负。
            <div class="action">
                <button @click="goback" class="cancel">取消</button>
                <button v-if="!show" class="diableBtn" disabled>{{`同意(${count})`}}</button>
                <button v-if="show" @click="agree">同意</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "agreement",
    data() {
        return {
            show: false,
            count: '',
            timer: null,
        };
    },
    mounted(){
        this.getTime()
    },
    methods: {
      goback(){
        this.$emit('cancel')
      },
      agree(){
        this.$emit('agree')
      },
      getTime(){
        const TIME_COUNT = 60;
        if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                } else {
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }, 1000)
        }
      }
    },
};
</script>
<style lang="less" scoped>
   .tipContent{
    position: absolute;
    top: 114px;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    background-image: url(../../../assets/yxtx/banner.jpg);
    background-origin: 100% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 75px 120px;
    .tip{
        padding: 63px;
        line-height: 20px;
        border-radius: 16px;
        background-color: rgba(255, 255, 255, 1);
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: left;
        font-family: Roboto;
        border: 1px solid rgba(187, 187, 187, 1);
    }
    .title{
        color: rgba(0, 122, 255, 1);
        font-size: 25px;
        text-align: center;
        font-family: SourceHanSansSC-regular;
        margin-bottom: 20px;
    }
    .action{
        margin-top: 35px;
        text-align: center;
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
        .diableBtn{
            cursor: not-allowed;
        }
    }
   }
</style>