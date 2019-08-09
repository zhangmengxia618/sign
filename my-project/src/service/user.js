import fly from '@/utils/request.js'

//登陆接口
export let login = code => {
  return fly.post('/user/code2session', { code })
}