const Service = require('egg').Service;
const charset = require('superagent-charset');
const superagent = charset(require('superagent'));
const cheerio = require('cheerio');
const DYTT_URL = 'http://www.dytt8.net';


class MovieService extends Service {
    async newest (page) {
        const url = `${DYTT_URL}/html/gndy/dyzz/list_23_${page}.html`;
        const res = await this._search(url);
        return res;
    }

    _search (url) {
        return new Promise((resolve, reject) => {
            superagent.get(url).charset().end((err, res) => {
                err && console.log(err)
                const $ = cheerio.load(res.text)
                const item = []
                $('.bd3rl .co_area2').each(function (i, n) {
                    if (i > 1) return;
                    var $n = $(n);
                    var obj = {
                        name: $n.find('.title_all strong').text(),
                        data: []
                    };
                    $n.find('tr').each(function (i, m) {
                        var $m = $(m);
                        var childUrl = url + $m.find('.inddline').eq(0).find('a').eq(1).attr('href');
                        obj.data.push({
                            title: $m.find('.inddline').eq(0).text(),
                            href: url + $m.find('.inddline').eq(0).find('a').eq(1).attr('href'),
                            date: $m.find('.inddline').eq(1).text(),
                            download_url: ''
                        });
                    });
                    item.push(obj);
                });
                resolve(item);
            })
        })
    }
}

module.exports = MovieService;