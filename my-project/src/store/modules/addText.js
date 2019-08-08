import {sign} from "@/service/sign"
//模块所有状态
const state={
   addData:[]
}
//莫快男同步改变
const mutations={
    updateSign(state,payload){
        state.addData=payload;
    }
}

//模块异步不改变
const actions = {
    async getLocation({commit},payload){
        const res = await sign(payload);
        console.log(res,'res+++++++++++')
        commit("updateSign",res.data);
        if(res.code===0){
            wx.showModal({
                title: "温馨提示",
                content: "添加面试成功",
                success(res) {
                  if (res.confirm) {
                    console.log("用户点击确定");
                    wx.navigateTo({
                      url: "/pages/interList/main"
                    });
                  } else if (res.cancel) {
                    console.log("用户点击取消");
                  }
                }
              });
        }
    },

}

export default{
   namespaced: true,
   state,
   mutations,
   actions
}