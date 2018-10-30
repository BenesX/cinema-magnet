import { post } from '../plugins/axios'

/**
 * wegene login
 * @param  {[string]} userName      [用户名]
 * @param  {[string]} password       [密码]
 * @param  {[number]} autoLogin [是否记住密码]
 * @return {[Obejct]} [description]
 */
const login = (userName, password, autoLogin, config) => {
    post('/account/ajax/login_process/', {
        user_name: userName,
        password: password,
        net_auto_login: autoLogin
    }, config)
}

export default {
    login
}
