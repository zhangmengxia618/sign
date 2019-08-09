import fly from "../utils/request";


// 登陆接口
export let sign = code=>{
    return fly.post('/sign', code);
}


//获取面试列表接口
export let signList = code=>{
    return fly.get('/sign', code);
}