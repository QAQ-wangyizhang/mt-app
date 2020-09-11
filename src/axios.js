import axios from "axios"
const appkey = 'QAQwangyizhang_1585626591787'
const baseUrl = 'http://api.duyiedu.com'

const instance = axios.create({
    baseURL : baseUrl,
    params : {
        appkey,
    }
})
instance.interceptors.response.use(data => {
    return data.data
})
// axios.interceptors.response.use(function(config){
//     return config.data.data
// })

export default instance
