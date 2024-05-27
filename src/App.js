// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieListPage from './pages/MovieListPage';
import FavoritesPage from './pages/FavouritePage';
import './navbar.css'
const App = () => {
  return (
    <Router>
      <div className="app">
      <nav className="navbar">
      <Link to="/" className="nav-link">Movie List</Link>
      <Link to="/favorites" className="nav-link">Favorites</Link>
    </nav>
        <Routes>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
