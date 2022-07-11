import { get } from "../../utils/request";
// import { get, post } from '../../http/axios'

export default {
  namespaced: true,
  state: {
    // 栏目数据
    allArticleData: []
  },
  mutations: {
    SET_ALLARTICLEDATA(state, payload) {
      state.allArticleData = payload
    }
  },
  actions: {
    //   获取文章的数据
    getAllArticleData({commit}, payload) {
      get('/api/article/list', payload).then(res => {
        commit('SET_ALLARTICLEDATA', res.data)
      })
    }

  }
}
