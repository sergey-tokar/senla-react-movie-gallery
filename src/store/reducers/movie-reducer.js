import {GET_MOVIES, MOVIES_IS_LOADED} from "../constants/constants";

const initialState = {
    isLoaded: false,
    data: [],
}

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                data: [action.payload],
            };
        case MOVIES_IS_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            }

        default:
            return state;
    }

}
