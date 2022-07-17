import { get } from "../../utils/request";
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    // 栏目数据
    allArticleData: {
      // 动态资讯
      dynamicNews:{

      },
      partyBuildingNews:{
  
      },
      announcement:{
  
      },
      changeNotification:{

      },
      procurementResults:{

      },
      purchaseAnnouncement:{

      },


    },
  },
  mutations: {
    SET_ALLARTICLEDATA(state, payload) {
      Vue.set(state.allArticleData,payload.key,payload.payload)
    },
  },
  actions: {
    //   获取文章的数据
    getAllArticleData({commit}, payload) {
      for (const key in payload.params) {
        if (payload.params[key]==null||payload.params[key]==undefined||payload.params[key]=='') {
          delete payload.params[key];
        }
      }
      get('/api/article/list', payload.params).then(res => {
        commit('SET_ALLARTICLEDATA', {payload:res.data,key:payload.key})
      })
    },
  }
}
