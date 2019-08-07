
//模块所有状态
const state={
     longitude:"113.324520", 
     latitude:"23.099994"
}
//莫快男同步改变
const mutations={
    updateLocation(state, payload){
        state.longitude = payload.longitude;
        state.latitude = payload.latitude;
      }
}

//模块异步不改变
const actions = {
    getLocation({commit},payload){
        wx.getLocation({
            type:"wgs84",
            success(res){
                console.log("zzzzz....",res)
                commit('updateLocation',res)
            }
        })
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}