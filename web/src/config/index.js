export const NODE_ENV = process.env.NODE_ENV || 'production'

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
    timeout: 20000,
    maxContentLength: 2000,
    headers: {},
    baseURL: NODE_ENV === 'production' ? window.G_BASE_URL : 'http://localhost:7001/'
}
export const CONSOLE_REQUEST_ENABLE = NODE_ENV !== 'production' // 开启请求参数打印
export const CONSOLE_RESPONSE_ENABLE = NODE_ENV !== 'production' // 开启响应参数打印
export const CONSOLE_MONITOR_ENABLE = true // 监控记录打印
