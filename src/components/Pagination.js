import React from 'react';
import {v4 as uuidv4} from 'uuid';

export default function Pagination({page, totalPages, onChange}) {
    let pagesArray = [1, '...'];

    switch (true) {
        case page <= 4:
            pagesArray = [...Array.from({length: 5}, (item, index) => ++index), '...', totalPages];
            break;
        case (page > 4 && page < totalPages - 3):
            pagesArray.push(...Array.from({length: 5}, (item, index) => page - 2 + index), '...', totalPages);
            break;
        case page >= totalPages - 3:
            pagesArray.push(
                ...Array.from({length: 5}, (item, index) => totalPages - index)
                    .sort((page1, page2) => page1 - page2));
            break;
        default:
            pagesArray = Array.from({length: 5}, (item, index) => page + index)
            pagesArray.push('...', totalPages);
    }

    const handleClick = (event) => {
        let currentPage = event.target.getAttribute('data-page');
        switch (currentPage) {
            case 'next':
                currentPage = Number(page) + 1;
                break;
            case 'previous':
                currentPage = Number(page) - 1;
                break;
            default:
                currentPage = Number(currentPage);
        }
        onChange(currentPage);
    }

    return (
        <ul className="pagination">
            <li className="pagination-item">
                <button onClick={handleClick} className="pagination-item__button basic-button previous-button"
                        id="previous-button"
                        data-page="previous"
                        disabled={Number(page) === 1}>←
                </button>
            </li>
            {
                pagesArray.map((paginationPage) => {
                    if (paginationPage === '...') {
                        return (
                            <li key={uuidv4()} className="pagination-item">
                                <p>{paginationPage}</p>
                            </li>
                        )
                    }
                    return (
                        <li key={uuidv4()} className="pagination-item">
                            <button onClick={handleClick}
                                    className={`pagination-item__button basic-button ${page === paginationPage ? 'selected' : ''}`}
                                    data-page={paginationPage}>{paginationPage}</button>
                        </li>
                    )
                })
            }
            <li className="pagination-item">
                <button onClick={handleClick} className="pagination-item__button basic-button next-button"
                        id="next-button"
                        data-page="next"
                        disabled={Number(page) === totalPages}>→
                </button>
            </li>
        </ul>
    );
}
