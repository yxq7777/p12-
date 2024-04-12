import axios from "axios"
// 创建 axios 实例
import { MessageBox } from "element-ui"
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  // 请求超时时间
  timeout: 36 * 1000
})
// 添加请求拦截器
import { getToken, removeToken } from "./js-cookie"
import router from "@/router"
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.headers.Authorization = `Bearer ${getToken()}`
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code === 10002 && response.status == 200) {
      // 返回登录页面重新登录,并且清楚当前token信息,需要清楚保存到本地的个人信息
      /**
       * TODO: 需要清楚保存到本地的个人信息
       */
      router.push({
        path: "/login"
      })
      removeToken()
    }

    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    let tilte = ""
    let message = error.response.data
    console.log(error, "71")
    // 因为状态码返回有两种情况,一种是正常的code码,401,200,302
    // 还有一种是非正常的状态码,如" 没有或者返回英文字母
    // 获取返回报错的状态码:  error.code
    // 获取返回的报错信息: error.message
    // 在这封装状态码
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          tilte = "资源未授权"
          break
        case 400:
          tilte = "错误请求"
          break
        case 403:
          tilte = "禁止访问"
          break
        case 404:
          tilte = "未找到所请求的资源"
          break
        case 405:
          tilte = "不允许使用该方法"
          break
        case 408:
          tilte = "请求超时"
          break
        case 500:
          tilte = "内部服务器错误"
          break
        case 501:
          tilte = "未实现"
          break
        case 502:
          tilte = "网关错误"
          break
        case 503:
          tilte = "服务不可用"
          break
        case 504:
          tilte = "网关超时"
          break
        case 505:
          tilte = "HTTP版本不受支持"
          break
        default:
          tilte = error.response.status
          return MessageBox.alert(message, tilte, {
            type: "warning"
          })
      }
    } else {
      return MessageBox.alert("请联系系统管理员, 或稍后再试!", "未知错误", {
        type: "error"
      })
    }
    return Promise.reject(error)
  }
)
// instance.adUrl = (url) => {
//   return process.env.VUE_APP_BASE_API + url
// }
export default instance
