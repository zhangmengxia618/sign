import {decrypt,updatePhone,fingerPrint} from '@/service';

const state = {
  phone: ''
}

const mutations = {
  updateState(state, payload){
    console.log(payload,'123payload+++++++++++++')
    state.phone=payload;
  }
}
const actions = {
  async getPhoneNumber({commit}, payload){
    console.log("payload....",payload);
      let data = await decrypt(payload);
      console.log(data,'data')
     
      if(data.code===0){
          let updatePhonea=await updatePhone({phone:data.data.phoneNumber*1})
          commit('updateState',data.data.phoneNumber);
      }
  },
  //生物认证
  async fingerPrintData({commit}, payload){
    console.log("payload....",payload);
      let data = await fingerPrint(payload);
      console.log(data,'data')
      
  },
}



export default {
  namespaced: true,
  state,
  mutations,
  actions
}