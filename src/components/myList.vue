<template>
  <div class="myList">
    <ul>
        <li v-for="(item,index) in 8" :key="index">
            <!-- <div v-html="str"></div> -->
            <div class="img">
                <img src="http://114.116.127.0:8080/api/file/getImgStream?idFile=2" alt="">
            </div>
            <div class="content">
                <p class="title">无意者烈火焚身;以正义的烈火拔出黑暗。我</p>
                <p class="time">2022-05-01</p>
                <p class="text">折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结!真正的恩典因不折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结!真正的恩典因不折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结!真正的恩典因不折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结!真正的恩典因不折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结!</p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "myList",
    props:['tableData','page'],
  data() {
    return {
      str:"<div class=\"content\" id=\"articleContent\">\r\n                        <div class=\"ad-wrap\">\r\n                                                    <p style=\"margin:0 0 10px 0;\"><a data-traceid=\"news_detail_above_text_link_1\" data-tracepid=\"news_detail_above_text_link\" style=\"color:#A00;font-weight:bold;\" href=\"https://my.oschina.net/u/3985214/blog/3018099?tdsourcetag=s_pcqq_aiomsg\" target=\"_blank\">开发十年，就只剩下这套架构体系了！ &gt;&gt;&gt;</a>&nbsp;&nbsp;<img src=\"https://www.oschina.net/img/hot3.png\" align=\"\" style=\"max-height: 32px; max-width: 32px;\"></p>\r\n                                    </div>\r\n                        <p>web-flash使用的Spring Boot从1.5.1升级到2.1.1</p><p>下面为升级过程</p><ul class=\" list-paddingleft-2\"><li><p>版本升级</p><pre>&lt;spring.boot.version&gt;2.1.1.RELEASE&lt;/spring.boot.version&gt;\r\n&lt;springframework.version&gt;5.1.3.RELEASE&lt;springframework.version&gt;</pre></li><li><p>配置增加</p><pre>spring.main.allow-bean-definition-overriding=true\r\nspring.jpa.hibernate.use-new-id-generator-mappings=false</pre></li></ul><ul class=\" list-paddingleft-2\"><li><p>审计功能调整，调整后代码:</p><pre>@Configuration\r\npublic&nbsp;class&nbsp;UserIDAuditorConfig&nbsp;implements&nbsp;AuditorAware&lt;Long&gt;&nbsp;{\r\n&nbsp;&nbsp;&nbsp;&nbsp;@Override\r\n&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;Optional&lt;Long&gt;&nbsp;getCurrentAuditor()&nbsp;{\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ShiroUser&nbsp;shiroUser&nbsp;=&nbsp;ShiroKit.getUser();\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(shiroUser!=null){\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;Optional.of(shiroUser.getId());\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;null;\r\n&nbsp;&nbsp;&nbsp;&nbsp;}\r\n}</pre></li><li><p>repository调整</p></li><ul class=\" list-paddingleft-2\" style=\"list-style-type: square;\"><li><p>之前的 delete(Long id)方法没有了，替换为：deleteById(Long id)</p></li><li><p>之前的 T findOne(Long id)方法没有了，替换为：\t\t</p><pre>Optional&lt;T&gt;&nbsp;optional&nbsp;=&nbsp;***Repository.findById(id);\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(optional.isPresent())&nbsp;{\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;optional.get();\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;null;</pre></li></ul><li><p>随着这次Spring Boot的升级也顺便做了一些其他内容的调整和重构</p></li><ul class=\" list-paddingleft-2\" style=\"list-style-type: square;\"><li><p>springframework也从4.3.5.RELEASE升级到5.1.3.RELEASE</p></li><li><p>为减小复杂度service去掉接口和实现类的结构，基础功能的service直接使用实现类；当然具体业务中如果有需求你也可以这没用</p></li><li><p>去掉了一些暂时用不到的maven依赖</p></li><li><p>完善了基础功能的审计功能(之前有介绍审计功能的实现翻番，后续会专门发一篇文档来说明审计功能在系统总的具体用法，当然聪明的你看代码就知道了)</p></li></ul></ul>\r\n                    </div>"
    };
  },
  created() {
  },

  methods: {
    
  },
};
</script>
<style lang="less" scoped>
.text{
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgba(0, 0, 0, 1);
        font-size: 14px;
      }
  .myList{
    padding-bottom: 30px;
    li{
      display: flex;
      margin-bottom: 64px;
      .img{
        width: 341px;
        height: 196px;
        img{
            width: 341px;
            height: 100%;
            vertical-align: baseline;
        }
      }
      .content{
        flex: 1;
        overflow: hidden;
        .title{
            width: 70%;
            color: rgba(0, 0, 0, 1);
            font-size: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 10px 0;
        }
        .time{
            width: 100%;
            padding-bottom: 10px;
            color: rgba(146, 146, 146, 1);
            font-size: 20px;
        }
        .text{
            width: 100%;
            color: rgba(16, 16, 16, 1);
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5; // 多行在这里修改数字即可，这里显示2行
            overflow:hidden;
            -webkit-box-orient: vertical;
            white-space: normal;
        }
      }
    }
  }
</style>