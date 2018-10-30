import { post, get } from '../plugins/axios'

/**
 * 多样本切换
 * @param  {String} uniqueId 样本borcode
 * @param  {String} referer  跳转url
 * @param  {Object} config   axios配置
 * @return {Object}
 */
const switchReport = (uniqueId, referer, config) => {
    return post('/report/ajax/set_master_report/', {
        unique_id: uniqueId,
        referer: referer
    }, config)
}

/**
 * 气泡消息通知
 * @param  {Object} config axios配置
 * @return {[type]}
 */
const getNotify = (config) => get('/home/ajax/notifications/', config)

/**
 * 获取微解读帖子
 * @param  {String} type   方式 随机
 * @param  {Number} limit  条数
 * @param  {Object} config [description]
 * @return {[type]}        [description]
 */
const getCrowdSource = (type = 'random', limit = 3, config) => {
    return get('/crowdsourcing/ajax/get_list/', {
        params: {
            type: type,
            limit: limit
        },
        ...config
    })
}

/**
 * 研究所列表
 * @param  {Number} [num=1] 随机条数
 * @param  {Object} config  [description]
 * @return {[type]}         [description]
 */
const getLabList = (num = 1, config) => {
    return get('/lab/ajax/get_list/', {
        params: {
            num
        },
        ...config
    })
}

export default {
    switchReport, getNotify, getCrowdSource, getLabList
}
