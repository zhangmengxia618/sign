import fly from "../utils/request";

// 登陆接口
export let login = code => {
  console.log(code, "code+++++++++++");
  return fly.post("/user/code2session", { code });
};

// 解密数据
export let decrypt = code => {
  return fly.post("/user/decrypt", code);
};


//跟新手机号
export let updatePhone = code => {
  return fly.post("/user/updatePhone", code);
};

//获取面试列表
export let signDetail = code => {
  return fly.get(`/sign/${code}`);
};

//获取面试详情
export let signPut = code => {
  let {id}=code;
  delete code.id;
  console.log(code,"code3323")
  return fly.put(`/sign/${id}`,code);
};

