import axios from "axios"
import URLs from "./URLs"
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

// axios.interceptors.response.use(function(config){
//     return config.data.data
// })

export default {
  searchHotWords,
  search,
  getMenuList,
  getResultProducts,
  getRecommendList
}
