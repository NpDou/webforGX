import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '@/styles.scss'
import '@/style/main.scss'
import * as filters from './filters'
import VueSuperSlide from 'vue-superslide'
// 引入moment
import moment from 'moment'

Vue.use(VueSuperSlide)
Vue.use(ElementUI)

Vue.filter("fmtDate_global", function (date) {
  return moment(date).format("YYYY-MM-DD");
  // 或者return自己编写的时间处理函数
})
Vue.filter('ellipsis', function (value, len) {
  // 去除标签、空格、换行符号等
  let content = value.replace(/<.+?>/g, "");
  content = content.replace(/&nbsp;/gi, "");
  content = content.replace(/&ldquo;/gi, "“");
  content = content.replace(/&rdquo;/gi, "”");
  content = content.replace(/&lsquo;/gi, "'");
  content = content.replace(/&rsquo;/gi, "'");
  content = content.replace(/&mdash;/gi, "—");
  content = content.replace(/\s/gi, "");
  if (!content) return "";
  if (content.length > len) {
    return content.slice(0, len) + "...";
  }
  return content;
})

var routeList = [];
router.beforeEach((to, from, next) => {
  var index = -1;
  for (var i = 0; i < routeList.length; i++) {
    if (routeList[i].name == to.name) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    //如果存在路由列表，则把之后的路由都删掉
    routeList.splice(index + 1, routeList.length - index - 1);
  } else if (to.name != '登录') {
    routeList.push({ "name": to.name, "path": to.fullPath });
  }
  to.meta.routeList = routeList;
  next()
});

// 页面跳转后滚动条位于最上方
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')