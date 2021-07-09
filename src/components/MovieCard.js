import React from 'react';

export default function MovieCard() {
    return (
        <li className="movie-card">
            <div className="movie-card__link"><img className="movie-card__poster"
                                                   src="https://image.tmdb.org/t/p/w200/gZUc6DbAirZGWJL1685jsOd90Sf.jpg"
                                                   alt="Постер фильма: Крестный отец"/>
            </div>
            <a href="" className='movie-card__link movie-card__title'>Крестный отец</a>
            <p className="movie-card__realise-date">released: 1972-03-14</p>
            <p className="movie-card__vote-average">rating: 8.7</p>
        </li>
    );
}
