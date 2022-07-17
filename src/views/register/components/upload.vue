<template>
    <div class="upload">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
            <p class="tips">请上传以下资料由公司账号管理员进行注册</p>
            <div class="content">
                <div class="item">
                    <el-form-item label="营业执照：" prop="yyzz">
                        <el-upload :on-success="(response, file, fileList)=>{uploadSuccess(response, file, fileList,'yyzz')}" :before-upload="beforeAvatarUpload" accept=".jpg" :limit="1" :action="uploadAction" list-type="picture-card"
                            :on-preview="handlePictureCardPreview" :on-remove="(file, fileList)=>{handleRemove(file, fileList,'yyzz')}">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">只支持.jpg 格式且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="安全生产许可证：" prop="aqscxkz">
                        <el-upload :on-success="(response, file, fileList)=>{uploadSuccess(response, file, fileList,'aqscxkz')}" :before-upload="beforeAvatarUpload" accept=".jpg" :limit="1" :action="uploadAction" list-type="picture-card"
                            :on-preview="handlePictureCardPreview" :on-remove="(file, fileList)=>{handleRemove(file, fileList,'aqscxkz')}">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">只支持.jpg 格式且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <p></p>
                </div>
                <div class="item">
                    <el-form-item label="资质证书：" prop="zzzsIds">
                        <el-upload :on-success="(response, file, fileList)=>{uploadSuccess(response, file, fileList,'zzzsIds')}" :before-upload="beforeAvatarUpload" accept=".jpg" :action="uploadAction" list-type="picture-card"
                            :on-preview="handlePictureCardPreview" :on-remove="(file, fileList)=>{handleRemove(file, fileList,'zzzsIds')}">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">只支持.jpg 格式且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="相关业绩：" prop="xgyjIds">
                        <el-upload :on-success="(response, file, fileList)=>{uploadSuccess(response, file, fileList,'xgyjIds')}" :on-preview="handlePictureCardPreview" class="upload-demo" :action="uploadAction" 
                             :on-remove="(file, fileList)=>{handleRemove(file, fileList,'xgyjIds')}">
                            <el-button size="small" type="primary">上传文件</el-button>
                        </el-upload>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="企业诚信资质：" prop="qycxzzIds">
                        <el-upload :on-success="(response, file, fileList)=>{uploadSuccess(response, file, fileList,'qycxzzIds')}" :on-preview="handlePictureCardPreview" class="upload-demo" :action="uploadAction"
                            :on-remove="(file, fileList)=>{handleRemove(file, fileList,'qycxzzIds')}">
                            <el-button size="small" type="primary">上传文件</el-button>
                        </el-upload>
                    </el-form-item>
                </div>
            </div>
        </el-form>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'upload',
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            ruleForm: {
                yyzz: '',
                aqscxkz: '',
                zzzsIds: '',
                xgyjIds: '',
                qycxzzIds: '',
            },
            uploadAction:`${process.env.VUE_APP_SERVER_URL}/api/file`,
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
                qycxzzIds: [
                    { required: true, message: '请上传相关文件', trigger: 'blur' },
                ],
            }
        };
    },
    methods: {
        handleRemove(file, fileList,key) {
            let idArr=[]
            post(`/api/file/deleteFile?id=${file.response?file.response.data.id:file.id}`).then(res=>{
                if(res.code==20000){
                    fileList.forEach(element => {
                        idArr.push(element.response?element.response.data.id:element.id)
                    });
                    this.$set(this.ruleForm,key,idArr.join(','))
                    this.$refs['ruleForm'].validateField(key);
                }
            })
        },
        uploadSuccess(response, file, fileList,key){
            let idArr=[]
            fileList.forEach(element => {
                idArr.push(element.response?element.response.data.id:element.id)
            });
            this.$set(this.ruleForm,key,idArr.join(','))
            console.log(this.ruleForm,'this.ruleForm');
            this.$refs['ruleForm'].validateField(key);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        submitForm(formName,cb) {
            console.log(111);
            this.$refs[formName].validate((valid) => {
                if (valid) {
                cb&&cb()
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 /1024< 5.12;
            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 512k!');
            }
            return isJPG && isLt2M;
        }
    }
}
</script>
<style lang="less" scoped>
.upload{
    padding: 60px 56px;
    background: #fff;
    .content{
        display: flex;
        flex-wrap: wrap;
        .item{
            margin: 0 30px;
            min-width: 300px;
        }
    }
    .tips{
        color: rgba(16, 16, 16, 1);
        font-size: 16px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
        margin-bottom: 30px;
    }
    :deep( .el-upload__tip){
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        text-align: left;
        font-family: PingFangSC-regular;
    }
}
</style>