export default function getMoviesFromServer(url = 'https://api.themoviedb.org/3/discover/movie?api_key=fd22ea5ba18819739b77c971c569ccaf&language=ru-RU&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_watch_monetization_types=flatrate') {
    fetch(url).then((response) =>
        response.json()
    );
}
