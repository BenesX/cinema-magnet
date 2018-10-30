const APP = require('express')()
const PORT = 3000
const URL = 'http://www.dytt8.net'
const charset = require('superagent-charset');
const superagent = charset(require('superagent'));
const cheerio = require('cheerio')
let item = []   // movie list

APP.get('/', (req, res) => {
    res.send('hello cinema')
})

APP.listen(PORT, () => {
    console.log(`listening in port: ${PORT}`)
})

getMoives()
function getMoives () {
    item = []
    superagent.get(URL).charset().end((err, res) => {
        err && console.log(err)
        const $ = cheerio.load(res.text)
        $('.bd3rl .co_area2').each(function (i, n) {
            if (i > 1) return;
            var $n = $(n);
            var obj = {
                name: $n.find('.title_all strong').text(),
                data: []
            };
            $n.find('tr').each(function (i, m) {
                var $m = $(m);
                var childUrl = URL + $m.find('.inddline').eq(0).find('a').eq(1).attr('href');
                obj.data.push({
                    title: $m.find('.inddline').eq(0).text(),
                    href: URL + $m.find('.inddline').eq(0).find('a').eq(1).attr('href'),
                    date: $m.find('.inddline').eq(1).text(),
                    download_url: ''
                });
            });
            item.push(obj);
        });
        console.log('obj', JSON.stringify(item))
        // item.forEach(n => {
        //     n.data.forEach((m, i) => {
        //         superagent.get(m.href).charset().end((err, cres) => {
        //             var _$ = cheerio.load(cres.text);
        //             var download_url = _$('#Zoom table a').text();
        //             var title = _$('.bd3r .title_all').text();
        //             title = title.substring(title.indexOf('《') + 1, title.indexOf('》'));
        //             console.log(title)
        //             var total_movie = title + '~~' + download_url + '\n';
        //             var total_movie = download_url.split(']')[1].substr(1) + '~~' + download_url + '\n';
        //             console.log('total', total_movie)
        //         });
        //     });
        // });
    })

}