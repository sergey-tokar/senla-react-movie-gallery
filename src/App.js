import './App.css';
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import FullMovieCard from "./components/FullMovieCard";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className='content-wrapper'>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <MovieList/>
                    <Pagination/>
                </Route>
                <Route path="/:movieId" exact>
                    <FullMovieCard/>
                </Route>
            </Switch>
            <Footer/>
        </div>

    );
}

export default App;
