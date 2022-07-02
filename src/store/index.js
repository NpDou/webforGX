import Vue from 'vue'
import Vuex from 'vuex'

// 引入文章模块
import article from './article/article'
import allArticle from './allArticle/allArticle'
import findArticle from './findArticle/findArticle'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    
    // 根据栏目查找第一个文章
    article,
    // 根据栏目查找所有文章
    allArticle,
    // 根据文章id查找文章
    findArticle,
  }
})