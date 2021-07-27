import React from "react";
import notFoundPage from "../images/not-found-page-image.png";

export default function NotFoundPage() {
    return (
        <div className="not-found-page">
            <p className="not-found-title">Извините, такой страницы не существует</p>
            <img className="not-found-image" src={notFoundPage} alt="Картинка страница не существует"/>
        </div>
    );
}
