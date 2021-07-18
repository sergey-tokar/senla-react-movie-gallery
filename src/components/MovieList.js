import React, {useEffect} from 'react';
import MovieCard from "./MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../store/actions/actions";

export default function MovieList() {
    const dispatch = useDispatch();
    const {data, isLoaded} = useSelector((state) => state.movies);
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);
    return (
        <ul className='movie-list'>
            {isLoaded ? data.map((movie) => (
                <MovieCard key={movie.id} {...movie}/>
            )) : <p>Loading</p>
            }
        </ul>
    );
}
