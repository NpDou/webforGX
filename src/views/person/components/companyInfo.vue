 <template>
    <div class="companyInfo">
        <ul>
            <li>
                <span class="label">
                    供应商名称
                </span>
                <span class="content">
                    {{userInfo.supplierName || '--'}}
                </span>
            </li>
            <li>
                <span class="label">
                    供应商类型
                </span>
                <span class="content">
                    {{userInfo.supplierType || '--'}}
                </span>
            </li>
            <li>
                <span class="label">
                    统一社会信用代码
                </span>
                <span class="content">
                    {{userInfo.code || '--'}}
                </span>
            </li>
            <li>
                <span class="label">
                    企业性质
                </span>
                <span class="content">
                    {{userInfo.qyxz || '--'}}
                </span>
            </li>

            <li>
                <span class="label">
                    登记机关
                </span>
                <span class="content">
                    {{userInfo.djjg || '--'}}
                </span>
            </li>
            <li>
                <span class="label">
                    经营状态
                </span>
                <span class="content">
                    {{userInfo.jyStatus || '--'}}
                </span>
            </li>
            <li>
                <span class="label">
                    经营期限
                </span>
                <span class="content">
                    {{userInfo.jyqx.split(',')[0] || '--'}}
                    <i>至</i>
                    {{userInfo.jyqx.split(',')[1] || '--'}}
                </span>
            </li>
            <li>
                <span class="label">
                    注册资金
                </span>
                <span class="content">
                    ￥ {{userInfo.zczj || '--'}}万
                </span>
            </li>
            <li>
                <span class="label">
                    开户行名称
                </span>
                <span class="content">
                    {{userInfo.khhmc || '--'}}
                </span>
            </li>
            <li>
                <span class="label">
                    银行账号
                </span>
                <span class="content">
                    {{userInfo.bankAccount || '--'}}
                </span>
            </li>
            <li>
                <span class="label">
                    法定代表人姓名
                </span>
                <span class="content">
                    {{userInfo.personName || '--'}}
                </span>
            </li>
            <li>
                <span class="label">
                    法人联系方式
                </span>
                <span class="content">
                    {{userInfo.personPhone || '--'}}
                </span>
            </li>
            <li>
                <span class="label">
                    单位详细地址
                </span>
                <span class="content">
                    {{userInfo.dwxxdz || '--'}}
                </span>
            </li>
            <li>
                <span class="label">
                    经营范围
                </span>
                <span class="content">
                    {{userInfo.businessScope || '--'}}
                </span>
            </li>

        </ul>
    </div>
  </template>
  <script>
  export default {
    name:'companyInfo',
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
  .companyInfo{
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
      flex: 1;
      line-height: 91px;
      color: rgba(145, 145, 145, 100);
     font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .label{
      display: inline-block;
      text-align: right;
      width: 160px;
      line-height: 91px;
      color: rgba(0, 0, 0, 1);
        font-size: 18px;
        padding-right: 30px;
    }
  }
  </style>