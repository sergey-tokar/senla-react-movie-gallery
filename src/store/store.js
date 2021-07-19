import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import movieReducer from "./reducers/movie-reducer";

const rootReducer = combineReducers({
    movies: movieReducer,
})

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
);
