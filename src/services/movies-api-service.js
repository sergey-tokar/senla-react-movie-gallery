import ApiService from "./api-service";

export default class MoviesApiService {

    static getMovies({page, sortBy}) {
        return fetch(ApiService.moviesUrl({page, sortBy}))
            .then((response) => {
                return response.json();
            })
    }

    static getGenres() {
        return fetch(ApiService.genresUrl())
            .then((response) => {
                return response.json();
            })
    }

}

