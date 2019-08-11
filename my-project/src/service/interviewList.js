import fly from '@/utils/request.js'

//获取面试列表
export let getInterviewList = params => {
  return fly.get('/sign', params)
}