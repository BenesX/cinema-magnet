'user strict';
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
const body = require('koa-better-body');
module.exports = (option, app) => {
    return async function (ctx, next) {
        // var bodyParser = require('body-parser');
        // ctx.app.use(bodyParser.json());//数据JSON类型
        // ctx.app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据
        const cb = body();
        console.log('====', cb);
        cb(next);
        await next();
    }
}