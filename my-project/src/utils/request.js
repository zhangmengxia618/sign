import store from '@/store'
var Fly = require('flyio/dist/npm/wx');
const fly = new Fly()

fly.config.header = {
  "content-type": "application/x-www-form-urlencoded"
}
fly.config.timeout = 10000;
fly.config.baseURL = 'https://sign.jasonandjay.com'

fly.interceptors.request.use((request) => {
  if (store.state.user.openid) {
    request.headers['openid'] = store.state.user.openid;

  }
  // console.log(request.body)
  return request;
})

fly.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {

  }
)

export default fly