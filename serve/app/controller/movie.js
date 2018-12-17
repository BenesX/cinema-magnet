const Controller = require('egg').Controller;
const Iconv = require('iconv-lite')

class MovieController extends Controller {
    async index () {
        const { ctx } = this;
        const type = ctx.params.type;
        const page = ctx.params.page;
        switch (type) {
            case 'newest': {
                return await this.newest(page);
            }
            case 'west': {
                return await this.west(page);
            }
            case 'jpan': {
                return await this.jpan(page);
            }
            case 'animation': {
                return await this.animation(page);
            }
            case 'classical': {
                return await this.classical(page);
            }
        }
    }
    async newest (page) {
        const { ctx, service } = this;
        const res = await service.movie.newest(page);
        ctx.body = { res: res, success: true, page };
    }

    async west (page) {
        const { ctx, service } = this;
        const res = await service.movie.west(page);
        ctx.body = { res: res, success: true, page };
    }

    async jpan (page) {
        const { ctx, service } = this;
        const res = await service.movie.jpan(page);
        ctx.body = { res: res, success: true, page };
    }

    async animation (page) {
        const { ctx, service } = this;
        const res = await service.movie.animation(page);
        ctx.body = { res: res, success: true, page };
    }

    async classical (page) {
        const { ctx, service } = this;
        const res = await service.movie.classical(page);
    }

    async search () {
        const { ctx, service } = this;
        const keyword = ctx.params.keyword;
        // TODO: 无论是GBK UTF 都无法和dyttde搜索匹配得上
        const res = await service.movie.search(Iconv.encode(keyword, 'GBK'));
        ctx.body = { res: res, success: true };
    }
}

module.exports = MovieController;