import {GET_MOVIES, MOVIES_IS_LOADED} from "../constants/constants";
import getMoviesFromServer from "../../services/get-movies-from-server";

export const getMovies = () => (dispatch) => {
    dispatch(setIsMoviesIsLoaded(false));
    getMoviesFromServer()
        .then((data) => {
            dispatch({type: GET_MOVIES, payload: data});
        })
        .then(() => setIsMoviesIsLoaded(true));
}

export function setIsMoviesIsLoaded(isLoaded) {
    return {
        type: MOVIES_IS_LOADED,
        payload: isLoaded,
    }
}
