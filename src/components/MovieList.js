import React, {useEffect} from 'react';
import MovieCard from "./MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../store/actions/actions";
import Preloader from "./Preloader";

export default function MovieList() {
    const dispatch = useDispatch();
    const {data, isLoaded} = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    if (isLoaded) {
        return (
            <ul className='movie-list'>
                {data.map((movie) => (
                <MovieCard key={movie.id} {...movie}/>))
                }
            </ul>
        );
    } else {
        return <Preloader/>;
    }
}
