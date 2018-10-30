import axios from 'axios'
import { AXIOS_DEFAULT_CONFIG } from '../config/index'
import { requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc } from '../config/interceptors/axios'

const axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG)

// 注入请求拦截
axiosInstance
    .interceptors.request.use(requestSuccessFunc, requestFailFunc)
// 注入响应拦截
axiosInstance
    .interceptors.response.use(responseSuccessFunc, responseFailFunc)

export function post (url, params, config) {
    return new Promise((resolve, reject) => {
        axiosInstance.post(url, params, config)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                console.warn('post error', err)
            })
    })
}

export function get (url, params) {
    return new Promise((resolve, reject) => {
        axiosInstance.get(url, params)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                console.warn('get error', err)
            })
    })
}

export { axiosInstance }
