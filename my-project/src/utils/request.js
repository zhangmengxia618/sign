var Fly = require('flyio/dist/npm/wx');
const fly = new Fly()

fly.config.header={
  "content-type":"application/x-www-form-urlencoded"
}
fly.config.timeout=10000;
fly.config.baseURL='https://sign.jasonandjay.com'

fly.interceptors.request.use((request) => {
  request.headers['openid'] = 'oUy9p5KSK_wbgEaAVAyxNYELq72Q';
  console.log(request.body)
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