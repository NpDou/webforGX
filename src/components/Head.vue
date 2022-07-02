<template>
  <div class="header">
    <!-- 顶部 -->
    <div class="h_top d_flex">
      <div class="left_side">
        <i style="color: rgba(200, 22, 36, 1);font-size: 16px;margin-right: 5px;" class="el-icon-phone"></i>
        <span>咨询服务热线：</span>
        <span style="color: rgba(200, 22, 36, 1);font-size: 16px;margin-left: 5px;">0771-56015</span>
      </div>
      <div class="right_side">
        <span>品质成就品牌</span>
        <span>大量落地案例</span>
        <span>持续关注维护</span>
      </div>
    </div>
    <!-- logo部分 -->
    <div class="h_logo">
      <div class="left">
        广西博施隆海投资有限公司
      </div>
      <div class="right demo-input-suffix">
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
          <div class="nav_item">
            <el-menu-item v-for="(item, index) in category" :key="item.id" :index="item.description"
              :class="{ on: currentIndex === index }" @click="changeIndex(index)">
              <span slot="title">{{ item.name }}</span>
              <ul class="second_menu" v-if="item.children && item.children.length > 0">
                <li v-for="i in item.children" :key="i.id" href="#" @click.stop="toPage(i.description)"
                  @click="changeIndex(index)">
                  <a>{{ i.name }}</a>
                </li>
              </ul>
            </el-menu-item>
          </div>
        </el-menu>
      </div>
      <div class="d_flex action_container">
        <span class="contactUs" @click="contactUs">联系我们</span>
        <button v-if="!hasLogin" @click="Login">登录</button>
        <button v-if="!hasLogin" @click="register">注册</button>
        <span v-if="hasLogin" class="contactUs" @click="person">个人中心</span>
        <button v-if="hasLogin" @click="logout">退出</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  inject: ["reload"],
  data() {
    return {
      hasLogin:false,
      searchInput: "",
      // 所有一级栏目
      category: [{
        id: 1,
        name: '首页',
        description: '/home',
      },
      {
        id: 2,
        name: '关于我们',
        description: '/aboutUs?tab=companyInfo',
        children: [
          {
            id: 21,
            name: '公司简介',
            description: '/aboutUs?tab=companyInfo',
          },
          {
            id: 22,
            name: '企业架构',
            description: '/aboutUs?tab=enterpriseArchitecture',
          }, {
            id: 23,
            name: '公司历程',
            description: '/aboutUs?tab=companyHistory',
          }
        ]
      },
      {
        id: 3,
        name: '动态资讯',
        description: '/companyDynamics?tab=dynamicNews',
        children: [
          {
            id: 31,
            name: '动态新闻',
            description: '/companyDynamics?tab=dynamicNews',
          },
          {
            id: 32,
            name: '党建新闻',
            description: '/companyDynamics?tab=partyBuildingNews',
          },
          {
            id: 33,
            name: '通知公告',
            description: '/companyDynamics?tab=announcement',
          },
        ]
      },
      {
        id: 4,
        name: '招标信息',
        description: '/biddingInformation?tab=purchaseAnnouncement',
        children: [
          {
            id: 41,
            name: '采购公告',
            description: '/biddingInformation?tab=purchaseAnnouncement',
          },
          {
            id: 42,
            name: '采购结果',
            description: '/biddingInformation?tab=procurementResults',
          },
          {
            id: 43,
            name: '更改通知',
            description: '/biddingInformation?tab=changeNotification',
          },
        ]
      }],
      currentIndex: "",
    };
  },
  mounted() {
    window.addEventListener("setItem", () => {
      this.hasLogin = sessionStorage.getItem("SESSIONID");
    });
    this.hasLogin = sessionStorage.getItem("SESSIONID");
  },
  methods: {
    contactUs(){
      window.scrollBy(0,99999)
    },
    logout(){
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
        this.setSessionItem("SESSIONID", '');
        sessionStorage.clear()
        this.$router.push('/')
      }, 2000);
    },
    changeIndex(index) {
      this.currentIndex = index;
    },
    Login() {
      this.$router.push({
        name: 'login'
      })
    },
    register(){
        this.$router.push({
            name: 'register'
        })
    },
    // 跳转路由
    toPage(path) {
      this.$router.push(path);
    },
    person(){
      this.$router.push('/person');
    },
  },
};
</script>
<style lang='less' scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  background: #fff;

  .h_top {
    box-sizing: border-box;
    padding: 0 87px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    background: #eeeeee;

    .left_side {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .right_side {
      color: rgba(91, 107, 115, 1);
      font-size: 14px;

      span {
        display: inline-block;
        margin: 0 18px;
      }
    }
  }

  .h_logo {
    box-sizing: border-box;
    width: 100%;
    height: 74px;
    margin: 0;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;

    .left {
      color: rgba(24, 144, 255, 1);
      font-size: 20px;
      text-align: left;
      line-height: 74px;

      img {
        width: 500px;
        margin-top: 10px;
      }
    }

    .right {
      flex: 1;
    }

    .action_container {
      align-items: center;
      .contactUs{
        cursor: pointer;
        font-size: 14px;
        color: #303133;
        height: 100%;
        width: 125px;
        line-height: 74px;
        text-align: center;
      }
      button {
        margin: 25px;
        width: 58px;
        height: 27px;
        line-height: 23px;
        border-radius: 21px;
        background-color: rgba(255, 255, 255, 1);
        color: rgba(16, 16, 16, 1);
        font-size: 16px;
        text-align: center;
        font-family: Roboto;
        border: 1px solid rgba(187, 187, 187, 1);
      }
    }
  }

  .el-menu.el-menu--horizontal {
    height: 100%;
    border-bottom: none;
    z-index: 9;
  }

  .el-menu-demo .nav_item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .el-menu-demo {
    .el-menu-item.is-active {
      border-bottom: 6px solid #007aff;
      background: #fff;
    }

    .nav_item>li {
      padding: 0;
      height: 100%;
      line-height: 74px;
      width: 108px;
      float: left;
      text-align: center;
    }

    .nav_item>li:last-child {
      width: 125px;
    }


    .nav_item>li:hover ul {
      display: block;
    }

    .second_menu {
      line-height: 74px;
      position: absolute;
      background: #fff;
      top: 74px;
      width: 100%;
      left: 0;
      display: none;

      li:last-child {
        border-bottom: none;
      }

      li:hover>a {
        color: #007AFF;
      }
    }
  }
}
</style>