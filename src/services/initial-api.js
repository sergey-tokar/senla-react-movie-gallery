export const initialApi = {
    movies: {
        server: 'https://api.themoviedb.org/3/discover/movie',
        apiKey: 'fd22ea5ba18819739b77c971c569ccaf',
        language: 'ru-RU',
        sortBy: 'vote_average.desc',
        includeAdult: 'false',
        includeVideo: 'false',
        page: '1',
        voteCountGte: '1000',
        withWatchMonetizationTypes: 'flatrate',
        get currentRequestUrl() {
            return `${this.server}?api_key=${this.apiKey}&language=${this.language}&sort_by=${this.sortBy}&include_adult=${this.includeAdult}&include_video=${this.includeVideo}&page=${this.page}&vote_count.gte=${this.voteCountGte}&with_watch_monetization_types=${this.withWatchMonetizationTypes}`;
        }
    },
    genres: {
        server: 'https://api.themoviedb.org/3/genre/movie/list',
        apiKey: 'fd22ea5ba18819739b77c971c569ccaf',
        language: 'ru-RU',
        get currentRequestUrl() {
            return `${this.server}?api_key=${this.apiKey}&language=${this.language}`;
        }
    }
};
