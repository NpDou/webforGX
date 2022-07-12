import { get } from "../../utils/request";
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    // 栏目数据
    allArticleData: {
      // 动态资讯
      bannerList:[],
    },
  },
  mutations: {
    set_bannerList(state, payload) {
      Vue.set(state.bannerList,payload)
    },
  },
  actions: {
    //   获取文章的数据
    getBanner({commit}, payload) {
      get('/api/cms/banner/list', payload).then(res => {
        commit('set_bannerList', res.data)
      })
    },
  }
}
