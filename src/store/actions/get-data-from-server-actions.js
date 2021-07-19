import {
    GET_MOVIES_SUCCESS,
    GET_DATA_STARTED,
    GET_DATA_FAILURE,
    GET_GENRES_SUCCESS, CHANGE_MOVIES_PAGE,
} from "../constants/constants";
import getMoviesFromServer from "../../services/get-movies-from-server";
import getGenresFromServer from "../../services/get-genres-from-server";

export const getMovies = () => (dispatch, getState) => {
    dispatch(getDataStarted(true));
    getMoviesFromServer(`https://api.themoviedb.org/3/discover/movie?api_key=fd22ea5ba18819739b77c971c569ccaf&language=ru-RU&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${getState().movies.page}&vote_count.gte=1000&with_watch_monetization_types=flatrate`)
        .then((moviesResponse) => {
            dispatch(getMoviesSuccess(moviesResponse));
        })
        .then(() => getGenresFromServer('https://api.themoviedb.org/3/genre/movie/list?api_key=fd22ea5ba18819739b77c971c569ccaf&language=ru-RU'))
        .then((genresResponse) => {
            dispatch(getGenresSuccess(genresResponse.genres));
        })
        .then(() => dispatch(getDataStarted(false)))
        .catch((error) => dispatch(getDataFailure(error)))
}

function getDataStarted(isLoading) {
    return {
        type: GET_DATA_STARTED,
        payload: isLoading,
    }
}

function getMoviesSuccess(moviesArray) {
    return {
        type: GET_MOVIES_SUCCESS,
        payload: moviesArray,
    }
}

function getDataFailure(error) {
    return {
        type: GET_DATA_FAILURE,
        payload: error.message,
    }
}

function getGenresSuccess(genresArray) {
    return {
        type: GET_GENRES_SUCCESS,
        payload: genresArray,
    }
}

export default function changePage(page) {
    return {
        type: CHANGE_MOVIES_PAGE,
        payload: page,
    }
}
