import { get } from "../../utils/request";
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    bannerList:[],
    userInfo_vuex:''
  },
  mutations: {
    set_bannerList(state, payload) {
      Vue.set(state,'bannerList',payload)
    },
    update_userInfo(state, payload) {
      Vue.set(state,'userInfo_vuex',payload)
    },
  },
  actions: {
    //   获取文章的数据
    getBanner({commit}, payload) {
      get('/api/cms/banner/list', payload).then(res => {
        commit('set_bannerList', res.data.records)
      })
    },
    updateUserInfo({commit}, playload) {
        console.log(playload,'qweqwe')
        commit('update_userInfo', playload)
    },
  }
}
