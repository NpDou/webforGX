import { get } from "../../utils/request";
// import { get, post } from '../../http/axios'

export default {
  namespaced: true,
  state: {
    // 栏目数据
    articleData: {}
  },
  mutations: {
    SET_ARTICLEDATA(state, payload) {
      state.articleData = payload
    }
    // SET_ARTICLEDATA(state, val) {
    //   state.articleData = val;
    // },
  },
  actions: {
    //   获取文章的数据
    getArticleData({commit}, payload) {
      get('/index/article/pageQuery', payload).then(res => {
        commit('SET_ARTICLEDATA', res.data.list[0])
      })
    }
    // async getArticleData(context, params) {
    //   let res = await get('/index/article/pageQuery', params);
    //   context.commit('SET_ARTICLEDATA', res.data);
    // },
  }
}
