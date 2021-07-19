import React from "react";

export default function Genres(props) {
    return (
        <ul className="movie-full-card__genres">
            {
                props.genres.map(genre =>
                    <li key={genre.id} className="movie-genre">{genre.name}</li>)
            }
        </ul>
    );
}
