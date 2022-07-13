import { get } from "../../utils/request";
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    bannerList:[],
  },
  mutations: {
    set_bannerList(state, payload) {
      Vue.set(state,'bannerList',payload)
    },
  },
  actions: {
    //   获取文章的数据
    getBanner({commit}, payload) {
      get('/api/cms/banner/list', payload).then(res => {
        console.log(res);
        commit('set_bannerList', res.data.records)
      })
    },
  }
}
