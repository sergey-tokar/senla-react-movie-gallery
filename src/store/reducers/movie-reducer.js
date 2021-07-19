import {
    GET_DATA_STARTED,
    GET_MOVIES_SUCCESS,
    GET_DATA_FAILURE,
    GET_GENRES_SUCCESS, CHANGE_MOVIES_PAGE
} from "../constants/constants";

const initialState = {
    isLoading: false,
    page: '1',
    totalPages:'',
    moviesArray: [],
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
        case GET_DATA_STARTED:
            return {
                ...state,
                isLoading: action.payload,
            }
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                moviesArray: [...action.payload.results],
                totalPages: action.payload.total_pages,
                error: null,
            };
        case GET_GENRES_SUCCESS:
            return {
                ...state,
                genresArray: [...action.payload],
                error: null,
            };
        case GET_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
