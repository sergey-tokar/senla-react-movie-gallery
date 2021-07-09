import React, {useEffect} from 'react';
import MovieCard from "./MovieCard";
import {useDispatch, useSelector} from "react-redux";
import getMoviesFromServer from "../services/get-movies-from-server";

export default function MovieList() {
    const dispatch = useDispatch();
    const {data, isLoaded} = useSelector((state) => state.movies);
    useEffect(() => {
        dispatch(getMoviesFromServer());
    }, [dispatch]);
    return (
        <ul className='movie-list'>
            {isLoaded ? data?.map((movie) => (
                    <MovieCard key={movie.id} {...movie}/>
                )) : <p>Loading</p>
            }
        </ul>
    );
}
