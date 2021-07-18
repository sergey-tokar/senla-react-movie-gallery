import {GET_MOVIES, MOVIES_IS_LOADED} from "../constants/constants";

export const getMovies =  () => (dispatch) => {
    dispatch(setMoviesIsLoaded(false));
     fetch('https://api.themoviedb.org/3/discover/movie?api_key=fd22ea5ba18819739b77c971c569ccaf&language=ru-RU&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_watch_monetization_types=flatrate')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            dispatch({type: GET_MOVIES, payload: data.results});
        })
        .then(() => dispatch(setMoviesIsLoaded(true)));
}

export function setMoviesIsLoaded(isLoaded) {
    return {
        type: MOVIES_IS_LOADED,
        payload: isLoaded,
    }
}
