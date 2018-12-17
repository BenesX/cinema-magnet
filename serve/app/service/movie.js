const Service = require('egg').Service;
const cheerio = require('cheerio');

class MovieService extends Service {
    async newest (page) {
        const url = `${this.config.dyttReptileSite}/html/gndy/dyzz/list_23_${page}.html`;
        const res = await this._searchDytt(url);
        return res;
    }

    async west (page) {
        const url = `${this.config.dyttReptileSite}/html/gndy/oumei/list_7_${page}.html`;
        const res = await this._searchDytt(url);
        return res;
    }

    async jpan (page) {
        const url = `${this.config.dyttReptileSite}/html/gndy/rihan/list_6_${page}.html`;
        const res = await this._searchDytt(url);
        return res;
    }

    async classical (page) {
        const url = `${this.config.sunMovieReptileSite}/html/gndy/jddy/20160320/50541${page != 1 ? '_' + page : ''}.html`;
        const res = await this._searchDytt(url);
        return res;
    }

    async animation (page) {
        // const url = `${this.config.xh127ReptileSite}/thread-19-${page}`;
        // const res = await this._searchXh127(url);
        const url = `${this.config.movieDogReptileSite}/list/9/2/${page}/`;
        const res = await this._searchMovieDog(url);
        return res;
    }

    async search (keyword) {
        const url = `${this.config.dyttSearchReptileSite}?typeid=1&keyword=${encodeURI(keyword)}`;
        console.log('url', url);
        const res = await this._searchDytt(url);
        return res;
    }

    async _searchDytt (url) {
        const res = await this.ctx.helper.loadSuperagent(url);
        const $ = cheerio.load(res.text)
        const links = []
        let movie_list = []
        $('.co_content8 ul a:last-child').each(function (i, n) {
            links.push($(n).attr('href'));
        });
        for (let i = 0; i < links.length; i++) {
            const cres = await this.ctx.helper.loadSuperagent(this.config.dyttReptileSite + links[i]);
            const $ = cheerio.load(cres.text);
            const $zoom = $('#Zoom');
            const movie_post = $zoom.find('img').eq(0).attr('src');
            let desc_html = '';
            if ($zoom.find('p').length > 0) {
                desc_html = $zoom.find('p').html();
            } else {
                desc_html = $zoom.find('span').html();
            }
            let handleDesc = desc_html.split('<br>').filter(item => item.indexOf('img') === -1 && item !== '');
            const movie_desc = handleDesc.join('<br>');
            const movie_magnet = $zoom.find('p').eq(0).find('a').attr('href');
            const movie_ftp = $zoom.find('table a').eq(0).text();
            movie_list.push({ movie_post, movie_desc, movie_magnet, movie_ftp });
        };
        movie_list = movie_list.filter(item => item.movie_magnet || item.movie_ftp)
        return movie_list;
    }

    async _searchXh127 (url) {
        const res = await this.ctx.helper.loadSuperagent(url);
        const $ = cheerio.load(res.text)
        const links = []
        let movie_list = []
        $('.thread_posts_list .subject .title').each((i, m) => {
            links.push($(m).find('a').eq(0).attr('href'));
        })
        links.splice(0, 11)
        let supereneArr = []
        for (let i = 0; i < links.length; i++) {
            supereneArr.push(this.ctx.helper.loadSuperagent(links[i]));
            if((i !== 0 && i%2 === 0) || i === links.length - 1) {
                const res = await Promise.all(supereneArr);
                res.map(item => {
                    const $ = cheerio.load(item.text);
                    const $zoom = $('.editor_content');
                    const movie_post = $zoom.find('.J_post_img').eq(0).attr('src');
                    const movie_desc = $zoom.find('span').eq(13).find('font').text();
                    const movie_magnet = $zoom.find('.blockquote').find('ol li').eq(0).text();
                    const movie_ftp = $zoom.find('.blockquote').find('span').eq(4).find('a').text();
                    const movie_ftp_pwd = $zoom.find('.blockquote').find('span').eq(5).find('b').text();
                    movie_list.push({ movie_post, movie_desc, movie_magnet, movie_ftp, movie_ftp_pwd })
                })
                supereneArr = [];
            }
        }
        movie_list = movie_list.filter(item => item.movie_magnet)
        return movie_list;
    }

    async _searchMovieDog (url) {
        const res = await this.ctx.helper.loadSuperagent(url);
        const $ = cheerio.load(res.text);
        const links = [];
        let movie_list = [];
        $('.listbox .listbox-entry .entry h2 a').each((i, m) => {
            links.push($(m).attr('href'));
        })
        let supereneArr = []
        for (let i = 0; i < links.length; i++) {
            supereneArr.push(this.ctx.helper.loadSuperagent(links[i]));
            if ((i !== 0 && i % 5 === 0) || i === links.length - 1) {
                const res = await Promise.all(supereneArr);
                res.map(item => {
                    const $ = cheerio.load(item.text);
                    const $zoom = $('.textbox-content');
                    const movie_post = $zoom.find('img').eq(0).attr('src');
                    let descArr = $zoom.html().match(/<\/center>(.+)<div class="quote downloadbox">/);
                    const movie_desc = descArr && descArr[1] || '';
                    const fid = this.ctx.helper.getQueryString($zoom.find('.quote-content').find('a').eq(0).attr('href'), 'fid');
                    const movie_magnet = `${this.config.movieDogReptileSite}/attachment.php?fid=${fid}`;
                    movie_list.push({ movie_post, movie_magnet, movie_desc })
                })
                supereneArr = [];
            }
        }
        movie_list = movie_list.filter(item => item.movie_magnet && item.movie_post.indexOf('http') !== -1);
        return movie_list;
    }
}

module.exports = MovieService;