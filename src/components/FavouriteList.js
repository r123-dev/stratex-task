

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/movieSlice';
import './FavouriteMovie.css';
import './MovieCard.css';
import movieImages from '../movieImages';
const FavoriteMovies = () => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(state => state.movies.favoriteMovies);

  return (
    <div className="favorite-movie-list-container">
      <div className="favorite-movie-list">
        {favoriteMovies.map(movie => (
          <div
            key={movie.id}
            className="favorite-movie-card"
            onClick={() => window.open(movie.imdb_url, "_blank")}
          >
            <img src={movieImages[movie.id]} alt={movie.movie} className="favorite-movie-image" />
            <div className="favorite-movie-details">
              <h2 className="favorite-movie-title">{movie.movie}</h2>
              <p className="favorite-movie-rating">Rating: {movie.rating}</p>
              <span
                className="favorite-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleFavorite(movie));
                }}
              >
                ❤️
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovies;
