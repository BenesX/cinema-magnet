import { post, get } from '../plugins/axios'

const getMovieList = (type, page) => get(`/movie/${type}/${page}`)

export default {
    getMovieList
}
