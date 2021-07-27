import React from 'react';
import MovieCard from "./MovieCard";

export default function MovieList({movies}) {
    return (
            <ul className='movie-list'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} {...movie}/>
                ))
                }
            </ul>
    );
}
