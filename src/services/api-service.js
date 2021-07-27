export default class ApiService {
    static moviesUrl({page = 1, sortBy = 'vote_average.desc' }) {
        return `https://api.themoviedb.org/3/discover/movie?api_key=fd22ea5ba18819739b77c971c569ccaf&language=ru-RU&sort_by=${sortBy}&include_adult=false&include_video=false&page=${page}&vote_count.gte=1000&with_watch_monetization_types=flatrate`;
    }
    static genresUrl() {
        return 'https://api.themoviedb.org/3/genre/movie/list?api_key=fd22ea5ba18819739b77c971c569ccaf&language=ru-RU';
    }
}
