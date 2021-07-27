import {
    GET_MOVIES_SUCCESS,
    DATA_LOADING,
    LOADING_FAILURE,
    GET_GENRES_SUCCESS,
    CHANGE_MOVIES_PAGE,
    CHANGE_MOVIES_SORT, GET_MOVIE_SUCCESS,
} from "../constants/constants";

import MoviesApiService from "../../services/movies-api-service";

export const loadMovies = () => async (dispatch, getState) => {
    dispatch(dataLoading(true));
    try {
        const movies = await MoviesApiService.getMovies({
            page: getState().movies.page,
            sortBy: getState().movies.sortBy
        });
        dispatch(moviesSuccess(movies));
        const genres = (await MoviesApiService.getGenres()).genres;
        dispatch(genresSuccess(genres));
        dispatch(dataLoading(false));
    } catch (error) {
        dispatch(loadingFailure(error));
    }
}

export const loadMovie = (movieId) => async (dispatch) =>{
    dispatch(dataLoading(true));
    try {
        const movie = await MoviesApiService.getMovie(movieId);
        if (movie.id) {
            dispatch(movieSuccess(movie));
        } else {
            new Error(movie.status_message);
        }
        const genres = (await MoviesApiService.getGenres()).genres;
        dispatch(genresSuccess(genres));
        dispatch(dataLoading(false));
    } catch (error) {
        dispatch(loadingFailure(error));
    }
}

export function dataLoading(isLoading) {
    return {
        type: DATA_LOADING,
        payload: isLoading,
    }
}

function moviesSuccess({results, total_pages: totalPages}) {
    return {
        type: GET_MOVIES_SUCCESS,
        payload: {results, totalPages},
    }
}

export function loadingFailure(error) {
    return {
        type: LOADING_FAILURE,
        payload: error.message,
    }
}

export function genresSuccess(genresArray) {
    return {
        type: GET_GENRES_SUCCESS,
        payload: genresArray,
    }
}

export function changePage(page) {
    return {
        type: CHANGE_MOVIES_PAGE,
        payload: page,
    }
}

export function changeSortBy(sortBy) {
    return {
        type: CHANGE_MOVIES_SORT,
        payload: sortBy
    }
}

function movieSuccess(movie) {
    return {
        type: GET_MOVIE_SUCCESS,
        payload: movie,
    }
}
