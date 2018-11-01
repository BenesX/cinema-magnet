const Controller = require('egg').Controller;

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

    async search () {

    }
}

module.exports = MovieController;