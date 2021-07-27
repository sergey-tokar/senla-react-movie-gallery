import {
    DATA_LOADING,
    GET_MOVIES_SUCCESS,
    LOADING_FAILURE,
    GET_GENRES_SUCCESS, CHANGE_MOVIES_PAGE
} from "../constants/constants";

const initialState = {
    isLoading: false,
    page: 1,
    totalPages: 0,
    movies: [],
    genresArray: [],
    error: null,
}

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MOVIES_PAGE:
            return {
                ...state,
                page: action.payload,
            }
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
        default:
            return state;
    }
}
