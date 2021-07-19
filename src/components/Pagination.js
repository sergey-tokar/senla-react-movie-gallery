import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import changePage, {getMovies} from "../store/actions/get-data-from-server-actions";

export default function Pagination() {
    const dispatch = useDispatch();
    const {page} = useSelector((state) => state.movies);
    const pages = Array.from({length: 10}, (v, k) => ++k);

    const handleClick = (event) => {
        const currentRequestUrl = `https://api.themoviedb.org/3/discover/movie?api_key=fd22ea5ba18819739b77c971c569ccaf&language=ru-RU&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=1000&with_watch_monetization_types=flatrate`
        dispatch(changePage(event.target.getAttribute('data-page')));
        dispatch(getMovies(currentRequestUrl));
    }

    return (
        <ul className="pagination">
            {
                pages.map((i) => {
                    return (
                        <li className="pagination-item">
                            <button onClick={handleClick}
                                    className={`pagination-item__button basic-button ${page === i.toString() ? 'selected' : ''}`}
                                    data-page={i}>{i}</button>
                        </li>
                    )
                })
            }
        </ul>
    );
}
