import './App.css';
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

function App() {
    return (
        <div className='content-wrapper'>
            <Header/>
            <MovieList/>
            <Pagination/>
            <Footer/>
        </div>

    );
}

export default App;
