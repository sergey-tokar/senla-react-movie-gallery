import React from "react";

export default function SortingMovies({sortBy, onChange}) {

    function changeSort(event) {
        onChange(event.target.value);
        event.preventDefault();
    }

    return (
        <div className="sorting-movies">
            <label htmlFor="sorting-movies">
                Сортировать по
                <select id="sorting-movies"
                        value={sortBy}
                        onChange={changeSort}>
                    <option value="release_date.asc">дате релиза (по возрастанию)</option>
                    <option value="release_date.desc">дате релиза (по убыванию)</option>
                    <option value="vote_average.asc">рейтингу (по возрастанию)</option>
                    <option value="vote_average.desc">рейтингу (по убыванию)</option>
                </select>
            </label>
        </div>
    )
}
