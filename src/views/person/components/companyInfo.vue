 <template>
    <div class="companyInfo">
        <div v-if="!isEdit">
            <div v-if="statusIcon" class="status"><img :src="statusIcon" alt=""></div>
            <ul>
                <li>
                    <span class="label">
                        供应商名称
                    </span>
                    <span class="content">
                        {{ userInfo.supplierName || '--' }}
                    </span>
                </li>
                <li>
                    <span class="label">
                        供应商类型
                    </span>
                    <span class="content">
                        {{ userInfo.supplierType || '--' }}
                    </span>
                </li>
                <li>
                    <span class="label">
                        统一社会信用代码
                    </span>
                    <span class="content">
                        {{ userInfo.code || '--' }}
                    </span>
                </li>
                <li>
                    <span class="label">
                        企业性质
                    </span>
                    <span class="content">
                        {{ userInfo.qyxz || '--' }}
                    </span>
                </li>

                <li>
                    <span class="label">
                        登记机关
                    </span>
                    <span class="content">
                        {{ userInfo.djjg || '--' }}
                    </span>
                </li>
                <li>
                    <span class="label">
                        经营状态
                    </span>
                    <span class="content">
                        {{ userInfo.jyStatus || '--' }}
                    </span>
                </li>
                <li>
                    <span class="label">
                        经营期限
                    </span>
                    <span class="content">
                        {{ userInfo.jyqx?userInfo.jyqx.split(',')[0] || '--':'--' }}
                        <i>至</i>
                        {{ userInfo.jyqx?userInfo.jyqx.split(',')[1] || '--':'--' }}
                    </span>
                </li>
                <li>
                    <span class="label">
                        注册资金
                    </span>
                    <span class="content">
                        ￥ {{ userInfo.zczj || '--' }}万
                    </span>
                </li>
                <li>
                    <span class="label">
                        开户行名称
                    </span>
                    <span class="content">
                        {{ userInfo.khhmc || '--' }}
                    </span>
                </li>
                <li>
                    <span class="label">
                        银行账号
                    </span>
                    <span class="content">
                        {{ userInfo.bankAccount || '--' }}
                    </span>
                </li>
                <li>
                    <span class="label">
                        法定代表人姓名
                    </span>
                    <span class="content">
                        {{ userInfo.personName || '--' }}
                    </span>
                </li>
                <li>
                    <span class="label">
                        法人联系方式
                    </span>
                    <span class="content">
                        {{ userInfo.personPhone || '--' }}
                    </span>
                </li>
                <li>
                    <span class="label">
                        单位详细地址
                    </span>
                    <span class="content">
                        {{ userInfo.dwxxdz || '--' }}
                    </span>
                </li>
                <li>
                    <span class="label">
                        经营范围
                    </span>
                    <span class="content">
                        {{ userInfo.businessScope || '--' }}
                    </span>
                </li>
            </ul>
            <div class="content">
                <div class="item">
                    <span class="label tal">
                        营业执照：
                    </span>
                    <span class="content">
                        <img :src="userInfo.yyzz ? (env + '/api/file/download?idFile=' + userInfo.yyzz) : ''"
                            alt="">
                    </span>
                </div>
                <div class="item">
                    <span class="label tal">
                        安全生产许可证：
                    </span>
                    <span class="content">
                        <img :src="userInfo.aqscxkz ? (env + '/api/file/download?idFile=' + userInfo.aqscxkz) : ''"
                            alt="">
                    </span>
                </div>
                <div class="item">
                    <span class="label tal">
                        企业诚信资质：
                    </span>
                    <span class="content">
                        <template v-for="(item, key) in userInfo.qycxzzList">
                            <img v-if="getstatus(item.originalFileName) == 'image'" :key="key"
                                :src="item.id ? (env + '/api/file/download?idFile=' + item.id) : ''" alt="">
                            <img v-else :key="key" :src="otherIcon" alt="">
                        </template>
                    </span>
                </div>
                <div class="item">
                    <span class="label tal">
                        相关业绩：
                    </span>
                    <span class="content">
                        <template v-for="(item, key) in userInfo.xgyjList">
                            <img v-if="getstatus(item.originalFileName) == 'image'" :key="key"
                                :src="item.id ? (env + '/api/file/download?idFile=' + item.id) : ''" alt="">
                            <img v-else :key="key" :src="otherIcon" alt="">
                        </template>
                    </span>
                </div>
                <div class="item">
                    <span class="label tal">
                        资质证书：
                    </span>
                    <span class="content">
                        <template v-for="(item, key) in userInfo.zzzsList">
                            <img v-if="getstatus(item.originalFileName) == 'image'" :key="key"
                                :src="item.id ? (env + '/api/file/download?idFile=' + item.id) : ''" alt="">
                            <img v-else :key="key" :src="otherIcon" alt="">
                        </template>
                    </span>
                </div>
            </div>
            <div v-if="userInfo.status === 2" class="action">
                <button @click="edit">更改</button>
                <p>您的企业信息 因{{ userInfo.remark }}审核未通过请及时更改信息</p>
            </div>
            <div v-if="userInfo.status === 0" class="action">
                <p>您的企业信息未审核，请耐心等待审核结果</p>
            </div>
        </div>
        <div v-if="isEdit" class="edit">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                <el-form-item label="供应商名称：" prop="supplierName">
                    <el-input v-model="ruleForm.supplierName"></el-input>
                </el-form-item>
                <el-form-item label="统一社会信用代码：" prop="code">
                    <el-input v-model="ruleForm.code"></el-input>
                </el-form-item>
                <el-form-item label="企业性质：" prop="qyxz">
                    <el-select v-model="ruleForm.qyxz" placeholder="请选择企业性质">
                        <el-option v-for="(item, index) in option" :key="index" :label="item" :value="item">{{ item }}
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="登记机关：" prop="djjg">
                    <el-input v-model="ruleForm.djjg"></el-input>
                </el-form-item>
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
                <el-form-item label="经营期限：" prop="jyqx">
                    <el-date-picker v-model="ruleForm.jyqx" type="daterange" format="yyyy-mm-dd"
                        value-format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                        align="right">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="经营地址：" prop="address">
                    <el-input v-model="ruleForm.address"></el-input>
                </el-form-item>
                <el-form-item label="注册资金：" prop="zczj">
                    <el-input v-model="ruleForm.zczj"></el-input>
                </el-form-item>
                <el-form-item label="供应商类型：" prop="supplierType">
                    <el-select v-model="ruleForm.supplierType" placeholder="请选择供应商类型">
                        <el-option label="施工单位" value="施工单位"></el-option>
                        <el-option label="设计单位" value="设计单位"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="银行账号：" prop="bankAccount">
                    <el-input v-model="ruleForm.bankAccount"></el-input>
                </el-form-item>
                <el-form-item label="开户行名称：" prop="khhmc">
                    <el-input v-model="ruleForm.khhmc"></el-input>
                </el-form-item>
                <el-form-item label="单位详细地址：" prop="dwxxdz">
                    <el-input v-model="ruleForm.dwxxdz"></el-input>
                </el-form-item>
                <el-form-item label="法人代表姓名：" prop="personName">
                    <el-input v-model="ruleForm.personName"></el-input>
                </el-form-item>
                <el-form-item label="法人联系方式：" prop="personPhone">
                    <el-input v-model="ruleForm.personPhone"></el-input>
                </el-form-item>
                <el-form-item label="经营范围：" prop="businessScope">
                    <el-input type="textarea" v-model="ruleForm.businessScope"></el-input>
                </el-form-item>
                    <el-form-item label="营业执照：" prop="yyzz">
                        <el-upload :file-list="ruleForm.yyzzList" :on-success="(response, file, fileList)=>{uploadSuccess(response, file, fileList,'yyzz')}" :before-upload="beforeAvatarUpload" accept=".jpg" :limit="1" :action="uploadAction" list-type="picture-card"
                            :on-preview="handlePictureCardPreview" :on-remove="(file, fileList)=>{handleRemove(file, fileList,'yyzz')}">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">只支持.jpg 格式且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="安全生产许可证：" prop="aqscxkz">
                        <el-upload :file-list="ruleForm.aqscxkzList" :on-success="(response, file, fileList)=>{uploadSuccess(response, file, fileList,'aqscxkz')}" :before-upload="beforeAvatarUpload" accept=".jpg" :limit="1" :action="uploadAction" list-type="picture-card"
                            :on-preview="handlePictureCardPreview" :on-remove="(file, fileList)=>{handleRemove(file, fileList,'aqscxkz')}">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">只支持.jpg 格式且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <p></p>
                    <el-form-item label="资质证书：" prop="zzzsIds">
                        <el-upload :data="{zzzs:ruleForm.id}" :file-list="ruleForm.zzzsList" :on-success="(response, file, fileList)=>{uploadSuccess(response, file, fileList,'zzzsIds')}" :before-upload="beforeAvatarUpload" accept=".jpg" :action="uploadAction" list-type="picture-card"
                            :on-preview="handlePictureCardPreview" :on-remove="(file, fileList)=>{handleRemove(file, fileList,'zzzsIds')}">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">只支持.jpg 格式且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="相关业绩：" prop="xgyjIds">
                        <el-upload :data="{xgyj:ruleForm.id}" :file-list="ruleForm.xgyjList" :on-success="(response, file, fileList)=>{uploadSuccess(response, file, fileList,'xgyjIds')}" :on-preview="handlePictureCardPreview" class="upload-demo" :action="uploadAction" 
                             :on-remove="(file, fileList)=>{handleRemove(file, fileList,'xgyjIds')}">
                            <el-button size="small" type="primary">上传文件</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="企业诚信资质：" prop="qycxzzIds">
                        <el-upload :data="{qycxzz:ruleForm.id}" :file-list="ruleForm.qycxzzList" :on-success="(response, file, fileList)=>{uploadSuccess(response, file, fileList,'qycxzzIds')}" :on-preview="handlePictureCardPreview" class="upload-demo" :action="uploadAction"
                            :on-remove="(file, fileList)=>{handleRemove(file, fileList,'qycxzzIds')}">
                            <el-button size="small" type="primary">上传文件</el-button>
                        </el-upload>
                    </el-form-item>
            </el-form>
            <div v-if="userInfo.status === 2" class="action">
                <button @click="submit">提交</button>
            </div>
        </div>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>
  <script>
import { put, get,post} from "@/utils/request";

import passed from '../../../assets/passed.png'
import passing from '../../../assets/passing.png'
import nopass from '../../../assets/nopass.png'
import otherIcon from '../../../assets/otherIcon.png'
import _ from 'lodash'
import { getFileType } from '@/utils/judge.js'
export default {
    name: 'companyInfo',
    data() {
        var verifySupplierName = (rule, value, callback) => {
            if (value == '') {
                callback(new Error('请输入供应商名'));
            } else {
                if(value==this.userInfo.supplierName){
                    callback()
                }else{
                    get("/api/gys/supplier/verifySupplierName", {
                        supplierName: value,
                    }).then(res => {
                        if (res.success) {
                            callback();
                        } else {
                            callback(new Error('供应商名称已存在'));
                        }
                    })
                }
            }
        }
        let validatePhone = (rule, value, callback) => {
            if (!value) {
                callback(new Error('法人联系方式不能为空！'));
            }
            //使用正则表达式进行验证手机号码
            if (!/^1[3456789]\d{9}$/.test(value)) {
                callback(new Error('手机号不正确！'));
            } else {
                callback()
            }
        };
        return {
            passed,
            passing,
            nopass,
            otherIcon,
            env: process.env.VUE_APP_SERVER_URL,
            isEdit: false,
            dialogImageUrl: '',
            dialogVisible: false,
            uploadAction:`${process.env.VUE_APP_SERVER_URL}/api/file`,
            option: [
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
                supplierName: '',//供应商名称
                code: '',//统一社会信用代码
                qyxz: '',//企业性质
                djjg: '',//登记机关
                jyStatus: '',//经营状态
                jyqx: [],//经营期限
                address: '',//经营地址
                zczj: '',//注册资金
                supplierType: '',//供应商类型
                bankAccount: '',//银行账户
                khhmc: '',//开户行名称
                dwxxdz: '',//单位详细地址
                personName: '',//法人代表姓名
                personPhone: '',//法人联系方式
                businessScope: '',//经营范围
                yyzz: '',
                aqscxkz: '',
                zzzsIds: '',
                xgyjIds: '',
                qycxzzIds: '',
                
            },
            rules: {
                yyzz: [
                    { required: true, message: '请上传相关文件', trigger: 'blur' },
                ],
                aqscxkz: [
                    { required: true, message: '请上传相关文件', trigger: 'blur' },
                ],
                zzzsIds: [
                    { required: true, message: '请上传相关文件', trigger: 'blur' },
                ],
                xgyjIds: [
                    { required: true, message: '请上传相关文件', trigger: 'blur' },
                ],
                // qycxzzIds: [
                //     { required: true, message: '请上传相关文件', trigger: 'blur' },
                // ],
                supplierName: [
                    { required: true, validator: verifySupplierName, trigger: 'blur' },
                ],
                code: [
                    { required: true, message: '请输入统一社会信用代码', trigger: 'blur' },
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
            },
            userInfo:{},
            id:''
        }
    },
    computed: {
        statusIcon() {
            if (this.userInfo.status === 0) {
                return this.passing
            }
            if (this.userInfo.status === 1) {
                return this.passed
            }
            if (this.userInfo.status === 2) {
                return this.nopass
            }
            return ''
        }
    },
    methods: {
        getstatus(name) {
            return getFileType(name)
        },
        edit() {
            this.ruleForm=_.cloneDeep(this.userInfo)
            this.ruleForm.yyzzList=this.ruleForm.yyzz?[{name:'',url:this.env + '/api/file/download?idFile='+this.ruleForm.yyzz}]:[]
            this.ruleForm.aqscxkzList=this.ruleForm.aqscxkz?[{name:'',url:this.env + '/api/file/download?idFile='+this.ruleForm.aqscxkz}]:[]
            let arr1=[]
            let arr2=[]
            let arr3=[]
            this.ruleForm.zzzsList.forEach(item=>{
                item.url=this.env + '/api/file/download?idFile='+item.id
                item.name=item.originalFileName
                arr1.push(item.id)
            })
            this.ruleForm.xgyjList.forEach(item=>{
                item.url=this.env + '/api/file/download?idFile='+item.id
                item.name=item.originalFileName
                arr2.push(item.id)
            })
            this.ruleForm.qycxzzList.forEach(item=>{
                item.url=this.env + '/api/file/download?idFile='+item.id
                item.name=item.originalFileName
                arr3.push(item.id)
            })
            this.ruleForm.zzzsIds=arr1.join(',')||''
            this.ruleForm.xgyjIds=arr2.join(',')||''
            this.ruleForm.qycxzzIds=arr3.join(',')||''
            this.ruleForm.jyqx=this.ruleForm.jyqx.split(',')||[]
            
            this.$nextTick(()=>{
                this.isEdit = true
            })
        },
        handleRemove(file, fileList,key) {
            let idArr=[]
            post(`/api/file/deleteFile?id=${file.response?file.response.data.id:file.id}`).then(res=>{
                if(res.code==20000){
                    fileList.forEach(element => {
                        idArr.push(element.response?element.response.data.id:element.id)
                    });
                    this.$set(this.ruleForm,key,idArr.join(','))
                    this.$nextTick(()=>{
                        this.$refs['ruleForm'].validateField(key);
                    })
                    if(key=='yyzz'||key=='aqscxkz'){
                        let params={}
                        params.id=this.ruleForm.id
                        params[key]=this.ruleForm[key]
                        put('/api/gys/supplier/update',params).then(res=>{
                            this.$message.success('更新成功')
                            this.isEdit=false
                            post('/api/gys/supplier/getSupplierById',{id:this.userInfo.id}).then(res=>{
                                if(res.code==20000){
                                    this.setSessionItem("SESSIONID", JSON.stringify(res.data));
                                }
                            })
                        })
                    }
                }
            })
        },
        uploadSuccess(response, file, fileList,key){
            let idArr=[]
            fileList.forEach(element => {
                idArr.push(element.response?element.response.data.id:element.id)
            });
            this.$set(this.ruleForm,key,idArr.join(','))
            this.$nextTick(()=>{
                this.$refs['ruleForm'].validateField(key);
            })
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        submit() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    let params=_.cloneDeep(this.ruleForm)
                    delete params.yyzzList
                    delete params.aqscxkzList
                    delete params.zzzsList
                    delete params.xgyjList
                    delete params.qycxzzList
                    delete params.createTime
                    delete params.createBy
                    delete params.remark
                    delete params.modifyBy
                    delete params.modifyTime
                    delete params.status
                    delete params.zzzsIds
                    delete params.xgyjIds
                    delete params.qycxzzIds
                    params.jyqx=params.jyqx.join(',')
                    put('/api/gys/supplier/update',params).then(res=>{
                        this.$message.success('更新成功')
                        this.isEdit = true
                    })
                } else {
                    this.$message.error('校验不通过')
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 < 5.12;
            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 512k!');
            }
            return isJPG && isLt2M;
        }
    },
    mounted(){
        this.userInfo=sessionStorage.getItem("SESSIONID")?JSON.parse(sessionStorage.getItem("SESSIONID")):{}
        this.id=this.$route.query.id || this.userInfo.id
    }
}
</script>
  <style lang="less" scoped>
  .companyInfo {
      background: #fff;
      height: 100%;
      overflow: auto;
      position: relative;
  
      .status {
          position: absolute;
          right: 50px;
          top: 30px;
          transform: rotate(-35deg);
  
          img {
              width: 200px;
              height: 190px;
          }
      }
  
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
          flex: 1;
          line-height: 91px;
          color: rgba(145, 145, 145, 100);
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }
  
      .label {
          display: inline-block;
          text-align: right;
          width: 160px;
          line-height: 91px;
          color: rgba(0, 0, 0, 1);
          font-size: 18px;
          padding-right: 30px;
      }
  
      .content {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 20px;
          .item {
              margin: 0 30px;
              min-width: 250px;
              img {
                  width: 250px;
                  height: 150px;
                  margin-right: 24px;
              }
          }
          .tal {
              text-align: left !important;
          }
      }
  
      .action {
          text-align: center;
          padding: 20px;
          border-top: 1px solid rgba(187, 187, 187, 1);
          button {
              width: 80px;
              height: 30px;
              border-radius: 4px;
              background-color: rgba(255, 0, 0, 100);
              color: rgba(255, 255, 255, 1);
              font-size: 14px;
              text-align: center;
              font-family: Microsoft Yahei;
              border: 0 none;
          }
  
          p {
              margin-top: 12px;
              color: rgba(255, 0, 0, 1);
              font-size: 14px;
              font-family: SourceHanSansSC-regular;
          }
      }
      .edit{
        padding: 60px 56px;
        padding-right: 150px;
        background: #fff;
        :deep(.el-select){
            width: 100%;
        }
        :deep(.el-range-editor.el-input__inner){
            width: 100%;
        }
    }
  }
  </style>