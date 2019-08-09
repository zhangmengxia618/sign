import fly from '@/utils/request.js'

//添加面试
export let addAddress = params => {
  return fly.post('/sign', params )
}