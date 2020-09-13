import axios from "axios"
import URLs from "./URLs"
import url from "postcss-url"
const appkey = 'QAQwangyizhang_1585626591787'
const instance = axios.create({
  baseURL: URLs.baseUrl,
  params: {
    appkey,
  }
})
instance.interceptors.response.use(data => {
  return data.data
})
const searchHotWords = _ => {
  return instance.get(URLs.searchHotWords);
}
const search = () => {
  return instance.get(URLs.search)
}

const getMenuList = () => {
  return instance.get(URLs.menuList)
}
const getResultProducts = ()=>{
    return instance.get(URLs.resultProducts)
}
const getRecommendList = ()=>{
    return instance.get(URLs.recommend)
}
const getProductsList = ()=>{
  return instance.get(URLs.productList);
}
const getHotCity = () => {
  return instance.get(URLs.hotCity);
}
const getRecentCity = () => {
  return instance.get(URLs.recentCity);
}

const getProvince = _ => {
  return instance.get(URLs.province);
}
const getCityList = _ => {
  return instance.get(URLs.cityList)
}
const login = (params) =>{
  return instance.get(URLs.login,{params})
}

const register = (params) => {
  return instance.get(URLs.register,params)
}
// axios.interceptors.response.use(function(config){
//     return config.data.data
// })

export default {
  searchHotWords,
  search,
  getMenuList,
  getResultProducts,
  getRecommendList,
  getProductsList,
  getHotCity,
  getRecentCity,
  getProvince,
  getCityList,
  login,
  register
}
