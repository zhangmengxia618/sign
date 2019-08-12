
import {signDetail,signPut} from '@/service';

const state = {
    signDetailData:{}
}

const mutations = {
    updateSignDet(state, payload){
    // payload.start_time = moment(payload.start_time).unix() * 1000,
    state.signDetailData=payload;
    console.log(state.signDetailData,'6213123')
  }
}
const actions = {
  async signDet({commit}, payload){
      let data = await signDetail(payload);
      commit('updateSignDet',data.data);
  },
  async signP({commit}, payload){
    console.log(payload,"payload123++++45")
    let data = await signPut(payload);
    console.log(data,'data')
    // commit('updateSignDet',data.data);
}
}




export default {
  namespaced: true,
  state,
  mutations,
  actions
}