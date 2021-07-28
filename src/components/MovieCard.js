import React from 'react';
import {Link} from "react-router-dom";
import noPosterPath from '../images/no-poster.png';
import {useSelector} from "react-redux";

export default function MovieCard(movie) {
    const {isAdmin} = useSelector(state => state.authorization);

    return (
        <li className="movie-card">
            <Link to={`/${movie.id}`} >
                <img className="movie-card__poster"
                     src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : noPosterPath}
                     alt={`Постер фильма: ${movie.title}`}/>
            </Link>
            <Link to={`/${movie.id}`} className='movie-card__link movie-card__title'>{movie.title}</Link>
            <p className="movie-card__realise-date">{`Релиз: ${movie.release_date}`}</p>
            <p className="movie-card__vote-average">{`Рейтинг: ${movie.vote_average}`}</p>
            <button className={`delete-button basic-button ${isAdmin ? '' : 'hidden'}`}/>
            <button className={`edit-button basic-button ${isAdmin ? '' : 'hidden'}`}/>
        </li>
    );
}
