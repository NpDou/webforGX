 <template>
    <div class="companyInfo">
        <ul>
            <li>
                <span class="label">
                    供应商名称
                </span>
                <span class="content">
                    南宁市城规地理信息技术有限公司
                </span>
            </li>
            <li>
                <span class="label">
                    供应商类型
                </span>
                <span class="content">
                    设计单位
                </span>
            </li>
            <li>
                <span class="label">
                    统一社会信用代码
                </span>
                <span class="content">
                    3468017591785XXXf4531896235346
                </span>
            </li>
            <li>
                <span class="label">
                    企业性质
                </span>
                <span class="content">
                    国有企业
                </span>
            </li>

            <li>
                <span class="label">
                    登记机关
                </span>
                <span class="content">
                    XXXXXXXX
                </span>
            </li>
            <li>
                <span class="label">
                    经营状态
                </span>
                <span class="content">
                    在营
                </span>
            </li>
            <li>
                <span class="label">
                    经营期限
                </span>
                <span class="content">
                    2022-01-13
                    <i>至</i>
                    2042-01-13
                </span>
            </li>
            <li>
                <span class="label">
                    注册资金
                </span>
                <span class="content">
                    ￥ 2000.00万
                </span>
            </li>
            <li>
                <span class="label">
                    开户行名称
                </span>
                <span class="content">
                    中国建设银行茶花园路支行
                </span>
            </li>
            <li>
                <span class="label">
                    银行账号
                </span>
                <span class="content">
                    6217 0033 6666 321
                </span>
            </li>
            <li>
                <span class="label">
                    法定代表人姓名
                </span>
                <span class="content">
                    谢武
                </span>
            </li>
            <li>
                <span class="label">
                    法人联系方式
                </span>
                <span class="content">
                    13307815895
                </span>
            </li>
            <li>
                <span class="label">
                    单位详细地址
                </span>
                <span class="content">
                    广西南宁市青秀区XXXX路XXXXXXXXX
                </span>
            </li>
            <li>
                <span class="label">
                    单位详细地址
                </span>
                <span class="content">
                    XXXXXXXXXXXXXX、XXXXXXXXXXXXXX、XXXXXXXXXXXXXXXXX、XXXXXXXXX、XXXXXXXXXXXX、XXXXXXXXXXXXXXXXX、XXXXXXXXXXXX、XXXXXXXXX、XXXXXXXXXXXXXXX、XXXXXXXXXXXXXX、XXXXXXXXXXXX、XXXXXXXXXXX、XXXXX、XXXXXXXXXXXXXXXXXXXXXX、XXXXXXXXXXXXXXXXXXXXXXX、XXXXXXXXXXXXXX、XXXXXXXXXXXX
                </span>
            </li>

        </ul>
    </div>
  </template>
  <script>
  export default {
    name:'companyInfo'
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
      width: 70%;
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
      width: 20%;
      line-height: 91px;
      color: rgba(0, 0, 0, 1);
        font-size: 18px;
        padding-right: 30px;
    }
  }
  </style>