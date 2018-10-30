import { axiosInstance } from './axios'
import api from './api'
import { componentInstall } from './components'
import { directiveInstall } from './directive'

export default {
    install: (Vue, options) => {
        componentInstall(Vue, options)
        directiveInstall(Vue, options)
        Vue.prototype.$api = api
        Vue.prototype.$axios = axiosInstance
    }
}
