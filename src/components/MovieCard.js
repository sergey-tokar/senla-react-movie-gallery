import React from 'react';

export default function MovieCard(props) {
    return (
        <li className="movie-card">
            <div className="movie-card__link"><img className="movie-card__poster"
                                                   src={`https://image.tmdb.org/t/p/w200${props.poster_path}`}
                                                   alt={`Постер фильма: ${props.title}`}/>
            </div>
            <a href="" className='movie-card__link movie-card__title'>{props.title}</a>
            <p className="movie-card__realise-date">released: {props.release_date}</p>
            <p className="movie-card__vote-average">{props.vote_average}</p>
        </li>
    );
}
