const charset = require('superagent-charset');
const superagent = charset(require('superagent'));

module.exports = {
    loadSuperagent (url) {
        return new Promise((resolve, reject) => {
            superagent.get(url).charset().end((err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    },
    getQueryString (url, name) {
        var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
        if (reg.test(url)) return RegExp.$2.replace(/\+/g, " ");
    }
}
