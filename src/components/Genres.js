import React from "react";

export default function Genres({genres}) {
    return (
        <ul className="movie-full-card__genres">
            {
                genres.map(genre =>
                    <li key={genre.id} className="movie-genre">{genre.name}</li>)
            }
        </ul>
    );
}
