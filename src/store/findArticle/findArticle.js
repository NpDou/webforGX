import { get } from "../../utils/request";

export default {
  namespaced: true,
  state: {
    // 栏目数据
    article: []
  },
  mutations: {
    SET_ARTICLE(state, payload) {
      state.article = payload
    }
  },
  actions: {
    //   获取文章的数据
    getArticle({commit}, payload) {
      get('/index/article/findById', payload).then(res => {
        commit('SET_ARTICLE', res.data)
      })
    }
  }
}
