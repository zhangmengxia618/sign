import {decrypt,updatePhone} from '@/service';

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
  }
}



export default {
  namespaced: true,
  state,
  mutations,
  actions
}