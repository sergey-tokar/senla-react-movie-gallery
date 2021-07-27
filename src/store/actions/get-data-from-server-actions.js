import {
    GET_MOVIES_SUCCESS,
    DATA_LOADING,
    LOADING_FAILURE,
    GET_GENRES_SUCCESS, CHANGE_MOVIES_PAGE,
} from "../constants/constants";

import MoviesApiService from "../../services/movies-api-service";

export const loadMovies = (page) => async (dispatch, getState) => {
    dispatch(dataLoading(true));
    try {
        const movies = await MoviesApiService.getMovies({page: getState().movies.page});
        dispatch(moviesSuccess(movies));
        const genres = (await MoviesApiService.getGenres()).genres;
        dispatch(genresSuccess(genres));
        dispatch(dataLoading(false));
    } catch (error) {
        dispatch(loadingFailure(error));
    }
}

function dataLoading(isLoading) {
    return {
        type: DATA_LOADING,
        payload: isLoading,
    }
}

function moviesSuccess({results, total_pages: totalPages, page}) {
    return {
        type: GET_MOVIES_SUCCESS,
        payload: {results, totalPages, page},
    }
}

function loadingFailure(error) {
    return {
        type: LOADING_FAILURE,
        payload: error.message,
    }
}

function genresSuccess(genresArray) {
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
