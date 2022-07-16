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
      get('/api/article/list', payload.params).then(res => {
        commit('SET_ALLARTICLEDATA', {payload:res.data,key:payload.key})
      })
    },
  }
}
