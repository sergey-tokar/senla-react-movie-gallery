import React from 'react';

export default function Pagination() {
    return (
        <ul className="pagination">
            <li className="pagination-item">
                <button className="pagination-item__button basic-button previous-button" id="previous-button"
                        data-page="previous">&#8592;</button>
            </li>
            <li class="pagination-item">
                <button class="pagination-item__button basic-button selected" data-page="1">1</button>
            </li>
            <li class="pagination-item hidden">
                <p class="first-dots">...</p>
            </li>
            <li class="pagination-item">
                <button class="pagination-item__button basic-button" data-page="2">2</button>
            </li>
            <li class="pagination-item">
                <button class="pagination-item__button basic-button" data-page="3">3</button>
            </li>
            <li class="pagination-item">
                <button class="pagination-item__button basic-button" data-page="4">4</button>
            </li>
            <li class="pagination-item">
                <button class="pagination-item__button basic-button" data-page="5">5</button>
            </li>
            <li className="pagination-item hidden">
                <p className="first-dots">...</p>
            </li>
            <li className="pagination-item">
                <button className="pagination-item__button basic-button next-button" id="next-button"
                        data-page="next">&#8594;</button>
            </li>
        </ul>
    );
}
