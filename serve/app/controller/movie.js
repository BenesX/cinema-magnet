const Controller = require('egg').Controller;

class MovieController extends Controller {
    async newest () {
        const { ctx, service } = this;
        const res = await service.movie.newest(1);
        ctx.body = { res: res };
        ctx.status = 201;
    }

    async hk () {

    }

    async jpan () {

    }

    async animation () {

    }

    async search () {

    }
}

module.exports = MovieController;