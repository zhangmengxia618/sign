import fly from "../utils/request";


// 登陆接口
export let sign = code=>{
    return fly.post('/sign', code);
}
