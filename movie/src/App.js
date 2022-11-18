import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieDetail from './components/movieDetail/movieDetail';
// import MovieCard from './components/movieCard/movieCard';
// import MovieListing from './components/movieListing/movieListing';
import Footer from './components/footer/Footer';
import PageNotFound from './components/pageNotFound/pageNotFound'

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <div className='container'>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/movie/:imdbID' component={<MovieDetail/>}/>
    <Route path='/pageNotFound' element={<PageNotFound/>}/>
    </Routes>
    </div>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
