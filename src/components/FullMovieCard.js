import React from "react";
import noPosterPath from '../images/no-poster.png';
import Genres from "./Genres";
import {useSelector} from "react-redux";

export default function FullMovieCard({movie, genres}) {
    const {isAdmin} = useSelector(state => state.authorization);

    return (
        <div className="movie-full-card"><img className="movie-full-card__poster"
                                              src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : noPosterPath}
                                              alt={`Постер фильма: ${movie.title}`}/>
            <button className={`full-movie-card__delete-button delete-button basic-button ${isAdmin ? '' : 'hidden'}`}/>
            <button className={`full-movie-card__edit-button edit-button basic-button ${isAdmin ? '' : 'hidden'}`}/>
            <p className="movie-full-card__title">{movie.title}</p>
            <Genres genres={genres}/>
            <p className="movie-full-card__release-date">{`Дата выхода: ${movie.release_date}`}</p>
            <p className="movie-full-card__vote-average">{`Рейтинг: ${movie.vote_average}`}</p>
            <p className="movie-full-card__popularity">{`Популярность: ${movie.popularity}`}</p>
            <p className="movie-full-card__vote-count">{`Проголосовали: ${movie.vote_count} раз`}</p>
            <p className="movie-full-card__overview">{movie.overview}</p>
        </div>
    );
}
