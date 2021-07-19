import React, {useEffect} from 'react';
import MovieCard from "./MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../store/actions/get-data-from-server-actions";
import Preloader from "./Preloader";

export default function MovieList() {
    const dispatch = useDispatch();
    const {moviesArray, isLoading, error, page} = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(getMovies(`https://api.themoviedb.org/3/discover/movie?api_key=fd22ea5ba18819739b77c971c569ccaf&language=ru-RU&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=1000&with_watch_monetization_types=flatrate`));
    }, [dispatch]);

    if (isLoading) {
        return <Preloader/>;
    } else {
        if (error) {
            return (
                <p className='error'>{`ERROR: ${error.message}`}</p>
            );
        } else {
            return (
                <ul className='movie-list'>
                    {moviesArray.map((movie) => (
                            <MovieCard key={movie.id} {...movie}/>
                        ))
                    }
                </ul>
            );
        }
    }
}
