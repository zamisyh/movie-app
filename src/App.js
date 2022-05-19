import React from 'react'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/movie/:id' element={<MovieDetail/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
