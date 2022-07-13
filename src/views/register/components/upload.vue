<template>
    <div class="upload">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
            <p class="tips">请上传以下资料由公司账号管理员进行注册</p>
            <div class="content">
                <div class="item">
                    <el-form-item label="营业执照：" prop="name">
                        <el-upload :before-upload="beforeAvatarUpload" accept=".jpg" :limit="1" :action="uploadAction" list-type="picture-card"
                            :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">只支持.jpg 格式且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="安全生产许可证：" prop="name">
                        <el-upload :before-upload="beforeAvatarUpload" accept=".jpg" :limit="1" :action="uploadAction" list-type="picture-card"
                            :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">只支持.jpg 格式且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <p></p>
                </div>
                <div class="item">
                    <el-form-item label="资质证书：" prop="name">
                        <el-upload :before-upload="beforeAvatarUpload" accept=".jpg" :limit="1" :action="uploadAction" list-type="picture-card"
                            :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">只支持.jpg 格式且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="相关业绩：" prop="name">
                        <el-upload :before-upload="beforeAvatarUpload" class="upload-demo" accept=".jpg" :limit="1" :action="uploadAction" 
                            :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <el-button size="small" type="primary">上传文件</el-button>
                        </el-upload>
                    </el-form-item>
                </div>
                <div class="item">
                    <el-form-item label="企业诚信资质：" prop="name">
                        <el-upload :before-upload="beforeAvatarUpload" class="upload-demo" accept=".jpg" :limit="1" :action="uploadAction"
                            :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
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
                name: '',
                psd: '',
                checkpsd: '',
                manageName: '',
                manageEmail: '',
                managePhone: '',
                manageTel: '',
            },
            uploadAction:`${process.env.VUE_APP_SERVER_URL}/api/file`,
            rules: {
                name: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ],
                psd: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ],
                checkpsd: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ],
            }
        };
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        submitForm(formName,cb) {
            this.$refs[formName].validate((valid) => {
                return valid
            });
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 < 5;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
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
    /deep/ .el-upload__tip{
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        text-align: left;
        font-family: PingFangSC-regular;
    }
}
</style>