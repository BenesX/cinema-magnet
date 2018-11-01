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
    }
}
