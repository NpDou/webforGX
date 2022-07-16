 <template>
  <div class="accountInfo">
    <ul>
      <li>
        <span class="content">
          <p>用户名</p>
          <p>{{ userInfo.account || '--' }}</p>
        </span>
        <span class="edit" @click="edit('account')">编辑</span>
      </li>
      <li>
        <span class="content">
          <p>密码</p>
          <p>已设置</p>
        </span>
        <span class="edit" @click="edit('password')">编辑</span>
      </li>
      <li>
        <span class="content">
          <p>管理员姓名</p>
          <p>{{ userInfo.name || '--' }}</p>
        </span>
        <span class="edit" @click="edit('name')">编辑</span>
      </li>
      <li>
        <span class="content">
          <p>管理员电话</p>
          <p>{{ userInfo.telephone || '--' }}</p>
        </span>
        <span class="edit" @click="edit('telephone')">编辑</span>
      </li>
      <li>
        <span class="content">
          <p>管理员手机</p>
          <p>{{ userInfo.cellphone || '--' }}</p>
        </span>
        <span class="edit" @click="edit('cellphone')">编辑</span>
      </li>
    </ul>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item v-if="type == 'password'" label="原密码" prop="oldPassword">
          <el-input type="password" v-model="ruleForm.oldPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="type == 'password'" label="新密码" prop="newPassword">
          <el-input type="password" v-model="ruleForm.newPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="type == 'password'" label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkpsd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="type == 'account'" label="用户名" prop="account">
          <el-input v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item v-if="type == 'name'" label="管理员姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item v-if="type == 'telephone'" label="管理员电话" prop="telephone">
          <el-input oninput="if(isNaN(value)) { value = null }" v-model="ruleForm.telephone"></el-input>
        </el-form-item>
        <el-form-item v-if="type == 'cellphone'" label="管理员手机" prop="cellphone">
          <el-input oninput="if(isNaN(value)) { value = null }" v-model="ruleForm.cellphone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="comfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
  <script>
  import { get, post } from "@/utils/request";
export default {
  name: '',
  data() {
    var verifyAccount = (rule, value, callback)=>{
      if(value == ''){
        callback(new Error('请输入用户名'));
      } else {
        if(value==this.userInfo.account){
          callback()
        }else{
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
    }
    var validatePass_old =(rule, value, callback) => {
      const passwordReg = /^(?![A-Za-z]+$)(?![A-Z\\d]+$)(?![A-Z\\W]+$)(?![a-z\\d]+$)(?![a-z\\W]+$)(?![\\d\\W]+$)\\S{6,}$/
      if (value === '') {
        callback(new Error('请输入原密码'));
      }else if (value !== this.ruleForm.password) {
        callback(new Error('原密码输入错误!'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      const passwordReg = /^(?![A-Za-z]+$)(?![A-Z\\d]+$)(?![A-Z\\W]+$)(?![a-z\\d]+$)(?![a-z\\W]+$)(?![\\d\\W]+$)\\S{6,}$/
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (passwordReg.test(value)) {
          callback()
        } else {
          callback(new Error('密码格式不规范，至少包含大小写字母、数字、特殊字符大于6个字符,请重新填写！'))
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.newPassword) {
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
    let validatePhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error('手机号不能为空！'));
      }
      //使用正则表达式进行验证手机号码
      if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error('手机号不正确！'));
      } else {
        callback()
      }
    };
    return {
      centerDialogVisible: false,
      type: '',
      ruleForm: {
        account: '',
        oldPassword: '',
        password: '',
        checkpsd: '',
        newPassword:'',
        name: '',
        email: '',
        cellphone: '',
        telephone: '',
      },
      rules: {
        account: [
                    { required: true, validator: verifyAccount, trigger: 'blur' },
                ],
        newPassword: [
          { required: true, validator: validatePass, trigger: 'blur' },
        ],
        oldPassword: [
          { required: true, validator: validatePass_old, trigger: 'blur' },
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
    }
  },
  props: {
    userInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    edit(prop) {
      this.type = prop
      this.ruleForm[prop] = this.userInfo[prop]
      this.centerDialogVisible = true
    },
    comfirm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.centerDialogVisible = false
          let params ={...this.ruleForm}
          const url=''
          if(this.type=='password'){
            url='/api/gys/supplier/updatePassword'
            params.password = params.newPassword
          }else{
            url='/api/gys/supplier/updateInformation'
          }
          post(url,{id:this.userInfo.id, ...params}).then(res=>{
            if(res.code==20000 && this.type == 'password'){
              this.$router.push('/login')
            }else if(res.code==20000 && this.type != 'password'){
              post('/api/gys/supplier/getSupplierById',{id:this.userInfo.id}).then(res=>{
                if(res.code==20000){
                  this.setSessionItem("SESSIONID", JSON.stringify(res.data));
                }
              })
            }else{
              this.$message.error('修改失败！')
            }
          })
        } else {
          return false;
        }
      });
    }
  }
}
</script>
  <style lang="less">
  .accountInfo {
    background: #fff;
    height: 100%;
    overflow: auto;
  
    ul {
      padding: 10px 37px;
    }
  
    li {
      height: 106px;
      box-sizing: border-box;
      display: flex;
      padding: 7px 15px;
      border-bottom: 1px solid rgba(233, 233, 233, 1);
    }
  
    .content {
      display: inline-block;
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
  
      p {
        color: rgba(145, 145, 145, 1);
        font-size: 14px;
      }
  
      p:first-child {
        color: rgba(0, 0, 0, 1);
        font-size: 18px;
        margin-bottom: 10px;
      }
  
      .text {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgba(0, 0, 0, 1);
        font-size: 14px;
      }
    }
  
    .edit {
      display: inline-block;
      text-align: right;
      cursor: pointer;
      width: 30%;
      line-height: 106px;
      color: rgba(24, 144, 255, 100);
      font-size: 14px;
      padding-right: 30px;
    }
  }
  </style>