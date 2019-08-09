import {sign,signList} from "@/service/sign"
//模块所有状态
const state={
   addData:[]
}
//莫快男同步改变
const mutations={
    updateSign(state,payload){
        console.log(payload,'res++payload+++++')
        payload.forEach((item,index)=>{
          if(item.address.includes("{")){
              item.address=JSON.parse(item.address).address;
          }
            item.start_time = new Date(Number(item.start_time)).toLocaleString();
        })
        state.addData=payload;
        console.log(state.addData,"addData++++++++++++")
    }
}

//模块异步不改变
const actions = {
    //添加面試
    async getLocation({commit},payload){
        const res = await sign(payload);
        // commit("updateSign",payload);
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

    //获取面试列表接口
    async getLocaList({commit},payload){
        let res;
        if(payload.status===2){
         res=await signList({
            page:1,
            pageSize:10
          });
        }else{
          res = await signList(payload);
        }
         
        console.log(res.data,'res+++++++++++')
        commit("updateSign",res.data);

    },

}

export default{
   namespaced: true,
   state,
   mutations,
   actions
}