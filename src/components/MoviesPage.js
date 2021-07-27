import React, {useEffect} from "react";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import {useDispatch, useSelector} from "react-redux";
import changePage, {loadMovies} from "../store/actions/get-data-from-server-actions";
import Preloader from "./Preloader";

export default function MoviesPage() {
    const dispatch = useDispatch();
    const {movies, isLoading, error, page, totalPages} = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(loadMovies());
    }, [dispatch, page]);

    if (isLoading) {
        return <Preloader/>;
    }

    if (error) {
        return (
            <p className='error'>{`ERROR: ${error.message}`}</p>
        );
    }

    return (
        <div>
            <MovieList movies={movies}/>
            <Pagination
                page={page}
                totalPages={totalPages}
                onChange={(page) => dispatch(changePage(page))}
            />
        </div>
    )

}
