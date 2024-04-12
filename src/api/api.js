import axios from "../utils/http"
//获取登录接口
export const loginAPi = (params) => {
  return axios.post("/sys/login", params)
}
//获取左侧菜单列表
export const menuListApi = (params) => {
  return axios.get("/sys/menuData", params)
}
//获取用户信息
export const userApi = () => {
  return axios.post("sys/profile")
}
