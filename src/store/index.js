import Vue from 'vue'
import Vuex from 'vuex'

// 引入文章模块
import allArticle from './allArticle/allArticle'
import getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // 根据栏目查找所有文章
    allArticle,
  },
  getters:{
    ...getters
  }
})