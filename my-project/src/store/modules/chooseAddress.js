import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js'
// console.log(QQMapWX)
const qqMapSdk = new QQMapWX({
  key: 'TRRBZ-SKZWG-2RFQ2-IOD67-ESAIQ-OABB4'
})

const state = {
  addressList: [],
  addinfo:{}
}

const actions = {
  getSuggestion({ commit }, payload) {
    // console.log(payload)
    qqMapSdk.getSuggestion({
      keyword: payload,
      success: res => {
        console.log(res.data)
        if (res.status === 0) {
          commit('updateLocation', res.data)
        }
      }
    })
  },
  chooseAdd({ commit }, payload){
    commit('addinfo', payload)
  }
}

const mutations = {
  updateLocation(state, payload) {
    state.addressList = payload;
  },
  addinfo(state,payload){
    console.log(payload)
    state.addinfo = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}