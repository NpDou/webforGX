 <template>
    <div class="accountInfo">
        <ul>
            <li>
                <span class="content">
                    <p>用户名</p>
                    <p>{{userInfo.account || '--'}}</p>
                </span>
                <span class="time">编辑</span>
            </li>
            <li>
                <span class="content">
                    <p>密码</p>
                    <p>已设置</p>
                </span>
                <span class="time">编辑</span>
            </li>
            <li>
                <span class="content">
                    <p>管理员姓名</p>
                    <p>{{userInfo.name || '--'}}</p>
                </span>
                <span class="time">编辑</span>
            </li>
            <li>
                <span class="content">
                    <p>管理员电话</p>
                    <p>{{userInfo.telephone || '--'}}</p>
                </span>
                <span class="time">编辑</span>
            </li>
            <li>
                <span class="content">
                    <p>管理员手机</p>
                    <p>{{userInfo.cellphone || '--'}}</p>
                </span>
                <span class="time">编辑</span>
            </li>
        </ul>
        <el-dialog
          title="提示"
          :visible.sync="centerDialogVisible"
          width="30%"
          center>
          <span>需要注意的是内容是默认不居中的</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
    </div>
  </template>
  <script>
  export default {
    name:'',
    data(){
      return {
        centerDialogVisible:false
      }
    },
    props:{
      userInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
  </script>
  <style lang="less">
  .accountInfo{
    background: #fff;
    height: 100%;
    overflow: auto;
    ul{
        padding: 10px 37px;
    }
    li{
        height: 106px;
        box-sizing: border-box;
      display: flex;
      padding: 7px 15px;
      border-bottom: 1px solid rgba(233, 233, 233, 1);
    }
    .content{
      display: inline-block;
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p{
        color: rgba(145, 145, 145, 1);
        font-size: 14px;
      }
      p:first-child{
        color: rgba(0, 0, 0, 1);
        font-size: 18px;
        margin-bottom: 10px;
      }
      .text{
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgba(0, 0, 0, 1);
        font-size: 14px;
      }
    }
    .time{
      display: inline-block;
      text-align: right;
      width: 30%;
      line-height: 106px;
      color: rgba(24, 144, 255, 100);
        font-size: 14px;
        padding-right: 30px;
    }
  }
  </style>