import { CONSOLE_REQUEST_ENABLE, CONSOLE_RESPONSE_ENABLE } from '../index'
import qs from 'qs'
import loadingComp from '@/components/loading-comp'
import Vue from 'vue'

const LoadingContrutor = Vue.extend(loadingComp)
let vm

export function requestSuccessFunc (requestObj) {
    if (!vm && requestObj.loading) {
        vm = new LoadingContrutor().$mount()
        vm.$on('toggelShow', function (val) {
            vm.visable = val
        })
        document.body.appendChild(vm.$el)
    }
    if (requestObj.loading) vm.loading()
    if (CONSOLE_REQUEST_ENABLE) {
        console.groupCollapsed('Request Task')
        console.info(requestObj.url)
        console.info(requestObj.data)
        console.groupEnd()
    }
    // 自定义请求拦截逻辑，可以处理权限，请求发送监控等

    if (requestObj.method === 'post') {
        requestObj.data = qs.stringify(requestObj.data)
    }
    return requestObj
}
export function requestFailFunc (requestError) {
    // 自定义发送请求失败逻辑，断网，请求发送监控等
    // CONSOLE_REQUEST_ENABLE && console.error(requestError)
    return Promise.reject(requestError)
}
export function responseSuccessFunc (responseObj) {
    // 自定义响应成功逻辑，全局拦截接口，根据不同业务做不同处理，响应成功监控等
    // CONSOLE_RESPONSE_ENABLE && console.info('responseSuccessFunc', responseObj)
    if (responseObj.config.loading) vm.complete()
    if (CONSOLE_RESPONSE_ENABLE) {
        console.groupCollapsed('Reponse Task')
        console.info(responseObj.config.url)
        console.info(responseObj.data)
        console.groupEnd()
    }
    const resData = responseObj.data
    return resData
}
export function responseFailFunc (responseError) {
    if (vm) vm.complete()
    return Promise.reject(responseError)
}
