import {
    DATA_LOADING,
    GET_MOVIES_SUCCESS,
    LOADING_FAILURE,
    GET_GENRES_SUCCESS,
    CHANGE_MOVIES_PAGE,
    CHANGE_MOVIES_SORT,
    GET_MOVIE_SUCCESS
} from "../constants/constants";

const initialState = {
    isLoading: false,
    page: 1,
    sortBy: 'vote_average.desc',
    totalPages: 0,
    movies: [],
    genresArray: [],
    error: null,
    movie: null,
}

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                movies: [...action.payload.results],
                totalPages: action.payload.totalPages,
                error: null,
            };
        case GET_GENRES_SUCCESS:
            return {
                ...state,
                genresArray: [...action.payload],
                error: null,
            };
        case LOADING_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case CHANGE_MOVIES_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        case CHANGE_MOVIES_SORT:
            return {
                ...state,
                sortBy: action.payload,
            }
        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                movie: action.payload,
            }
        default:
            return state;
    }
}
