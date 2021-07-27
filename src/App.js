import './App.css';
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Switch} from "react-router-dom";
import MoviesPage from "./components/MoviesPage";
import MovieList from "./components/MovieList";

export default function App() {
    return (
        <div className='content-wrapper'>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <MoviesPage/>
                </Route>
                <Route path="/:movieId" exact>
                    <MovieList/>
                </Route>
            </Switch>
            <Footer/>
        </div>

    );
}
