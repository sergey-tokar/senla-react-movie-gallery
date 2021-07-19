import React from 'react';
import {Link} from "react-router-dom";
import noPosterPath from '../images/no-poster.png';

export default function MovieCard(movie) {
    return (
        <li className="movie-card">
            <div className="movie-card__link"><img className="movie-card__poster"
                                                   src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : noPosterPath}
                                                   alt={`Постер фильма: ${movie.title}`}/>
            </div>
            <Link to={`/${movie.id}`} className='movie-card__link movie-card__title'>{movie.title}</Link>
            <p className="movie-card__realise-date">{`Релиз: ${movie.release_date}`}</p>
            <p className="movie-card__vote-average">{`Рейтинг: ${movie.vote_average}`}</p>
        </li>
    );
}
