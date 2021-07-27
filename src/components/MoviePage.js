import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import NotFoundPage from "./NotFoundPage";
import Preloader from "./Preloader";
import FullMovieCard from "./FullMovieCard";
import {loadMovie} from "../store/actions/get-data-from-server-actions";

export default function MoviePage() {
    const dispatch = useDispatch();
    const {movieId} = useParams();
    const {genresArray, isLoading, movie} = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(loadMovie(movieId));
    }, [dispatch, movieId]);

    if (isLoading) {
        return (
            <div>
                <Preloader/>
            </div>
        );
    }

    if (movie && !isNaN(Number(movieId))) {
        const genres = genresArray.filter((genre) =>
            movie.genres.find(movieGenreId => movieGenreId === genre.id)
        );
        return (
            <div>
                <FullMovieCard movie={movie} genres={genres}/>
            </div>
        );
    }

    return (
        <div>
            <NotFoundPage/>
        </div>
    )
}
