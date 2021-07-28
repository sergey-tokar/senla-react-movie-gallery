import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import movieReducer from "./reducers/movie-reducer";
import authorizationReducer from "./reducers/authorization-reducer";

const rootReducer = combineReducers({
    movies: movieReducer,
    authorization: authorizationReducer,
})

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
/*        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
    )
);
