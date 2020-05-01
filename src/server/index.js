import axios from 'axios';
import http from "../../myConfig/api.config";
let qs = require("querystring");

let service = axios.create({
    baseURL:http.swapsURL
})

// 拦截器
service.interceptors.request.use(config => {
  // post方法并且数据不是formData，序列化参数
  if (config.method === 'post' && config.headers['Content-Type'] !== 'multipart/form-data') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(res => {
  if (parseInt(res.status) !== 200) return Promise.reject(res)
  /*
   * 状态码0判断，成功返回，失败则根据error.status判断是请求成功还是请求失败
   * error.status为true，则表示请求成功，此时根据后台返回状态码编写回调逻辑
   * error.status不存在，则表示请求失败（网络原因、请求状态不为200等原因）
   */
  if (res.data.code === 0) return res.data
  return Promise.reject(res.data)
}, error => {
  return Promise.reject(error)
})

const request = {
    // H5
    // 获取算力产品列表
    getContractList () {
      return service.post('/contract/list')
    },
    getSwapAllTicker () {
      return service.post('/market/ticker/all')
    },

}

export default request;
