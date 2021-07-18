import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import movieReducer from "./reducers/movie-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    movies: movieReducer,
})

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
