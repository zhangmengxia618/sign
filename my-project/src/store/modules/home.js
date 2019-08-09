const state = {
  longitude:"116.30 ",
  latitude:"39.95"
}

const mutations = {
  updateLocation(state,payload){
    state.longitude=payload.longitude;
    state.latitude=payload.latitude
  }
}

const actions = {
  getLocation({commit},payload){
    wx.getLocation({
      type:'wgs84',
      success(res){
        // console.log(res);
        commit('updateLocation',res)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}