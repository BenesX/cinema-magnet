import { requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc } from './axios'

const interceptors = {
    requestSuccessFunc,
    requestFailFunc,
    responseSuccessFunc,
    responseFailFunc,
}

export default interceptors
