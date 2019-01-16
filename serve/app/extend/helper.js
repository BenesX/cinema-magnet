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
    },
    toFixed (num, length) {
        if (typeof num == 'undefined' || isNaN(num)) return '';
        var carry = 0; //存放进位标志
        var num, multiple; //num为原浮点数放大multiple倍后的数，multiple为10的length次方
        var str = num + ''; //将调用该方法的数字转为字符串
        var dot = str.indexOf("."); //找到小数点的位置
        if (str.substr(dot + length + 1, 1) >= 5) carry = 1; //找到要进行舍入的数的位置，手动判断是否大于等于5，满足条件进位标志置为1
        multiple = Math.pow(10, length); //设置浮点数要扩大的倍数
        num = Math.floor(num * multiple) + carry; //去掉舍入位后的所有数，然后加上我们的手动进位数
        var result = num / multiple + ''; //将进位后的整数再缩小为原浮点数
        /*
        * 处理进位后无小数
        */
        dot = result.indexOf(".");
        if (dot < 0) {
            result += '.';
            dot = result.indexOf(".");
        }
        /*
        * 处理多次进位
        */
        var len = result.length - (dot + 1);
        if (len < length) {
            for (var i = 0; i < length - len; i++) {
                result += 0;
            }
        }
        return result;

    },
    addPermil (num) {
        let intNum = num.toString().split('.')[0];
        let decimal = num.toString().split('.')[1] || '';
        let res = '';
        if (intNum) res = (intNum + '').replace(/\B(?=(\d{3})+$)/g, ',');
        if (decimal) res = `${res}.${decimal}`;
        return res;
    }
}
