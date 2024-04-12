import Cookie from "js-cookie"
const token = "Authorization"
//获取token
export const getToken = () => {
  return Cookie.get(token)
}
//存储token
export const setToken = (value) => {
  return Cookie.set(token, value)
}
//删除token
export const removeToken = () => {
  return Cookie.remove(token)
}
