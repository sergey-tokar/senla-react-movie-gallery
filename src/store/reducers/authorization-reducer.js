import {
    ADD_NEW_USER, ADMIN_LOG_IN,
    LOG_IN, LOG_OUT

} from "../constants/constants";
import dummyData from '../../dummy_data/users.json';


const initialState = {
    isAuthorized: false,
    isAdmin: false,
    users: [...dummyData.users],
    currentUser: '',
}

export default function authorizationReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isAuthorized: true,
                currentUser: action.payload,
            }
        case ADMIN_LOG_IN:
            return {
                ...state,
                isAdmin: true,
                isAuthorized: true,
                currentUser: action.payload,
            }
        case LOG_OUT:
            return {
                ...state,
                isAuthorized: false,
                currentUser: '',
            }
        case ADD_NEW_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
                isAuthorized: true,
                currentUser: action.payload,
            }
        default:
            return state;
    }
}
