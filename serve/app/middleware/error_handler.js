'use strict';

module.exports = (option, app) => {
    // 中间件的配置项，框架会将 app.config[${middlewareName}] 传递进来
    return async function (ctx, next) {
        try {
            await next();
        } catch (err) {
            // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
            app.emit('error', err, this);
            const status = ctx.status || 500;
            const error_msg = status === 500 && app.config.env === 'prod'
                ? 'Internal Server Error'
                : app.config.env === 'prod' ? 'System Error' : err.message;
            ctx.body = { error_msg };
            ctx.body.success = false;
            if (status === 422) {
                ctx.body.detail = err.errors
            }
            ctx.status = status;
        }
    }
}