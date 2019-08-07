
//模块所有状态
const state={
   addData:[]
}
//莫快男同步改变
const mutations={
    btn(state,payload){
        console.log("ss",payload)
    }
}

//模块异步不改变
const actions = {

}

export default{
   namespaced: true,
   state,
   mutations,
   actions
}