'user strict';

module.exports = (option, app) => {
    return async function movieCache(ctx, next) {
        const { service } = ctx;
        const movieType = ctx.params.type || 'common';
        const moviePage = ctx.params.page || '0';
        const keyword = ctx.params.keyword || 'no';
        const key = `movie-${movieType}-${moviePage}-${keyword}`;
        const movieList = await service.cache.get(key);
        if (movieList && movieList.length > 0) {
            ctx.body = {
                res: JSON.parse(movieList),
                success: true,
                page: moviePage,
                type: movieType
            };
            return;
        }
        await next();
        const { res } = ctx.body;
        if (res) {
            await service.cache.setex(key, res, 60 * 60 * 24);
        }
    }
}