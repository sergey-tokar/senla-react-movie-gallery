import './App.css';
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Switch} from "react-router-dom";
import MoviesPage from "./components/MoviesPage";
import NotFoundPage from "./components/NotFoundPage";
import MoviePage from "./components/MoviePage";

export default function App() {
    return (
        <div className='content-wrapper'>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <MoviesPage/>
                </Route>
                <Route exact path="/:movieId">
                    <MoviePage/>
                </Route>
                <NotFoundPage/>
            </Switch>
            <Footer/>
        </div>

    );
}
