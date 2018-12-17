import { post, get } from '../plugins/axios'

const getMovieList = (type, page) => get(`/movie/query/${type}/${page}`)

export default {
    getMovieList
}
