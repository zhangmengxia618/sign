import { decrypt } from '@/service'

const state = {
  openid: '',
  phone: "************"
}

const mutations = { 
  //openid
  openid(state,payload){
    state.openid=payload
  },
  //用户手机号
  saveinfo(state,payload){
    state.phone=payload
  }
}

const actions = {
  
  async decrypts({ commit }, payload) {
    let data = await decrypt(payload);
    console.log(data)
    // if(){
      
    // }
    commit('saveinfo', data.data.phoneNumber)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}