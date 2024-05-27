import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, toggleFavorite } from '../redux/movieSlice';
import './MovieList.css';
import './MovieCard.css';
import '../movieImages';
import movieImages from '../movieImages';
const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const favoriteMovies = useSelector(state => state.movies.favoriteMovies);

  useEffect(() => {
    // Dispatch fetchMovies action creator when component mounts
    dispatch(fetchMovies());
  }, [dispatch]);

  const isFavorite = (id) => favoriteMovies.some(movie => movie.id === id);

  return (
    <div className="movie-list-container">
      <div className="movie-list">
        {movies.map(movie => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => window.open(movie.imdb_url, "_blank")}
          >
            {/* Dynamically import image from the images folder */}
            <img src={movieImages[movie.id]} alt={movie.movie} className="movie-image" />
            <div className="movie-details">
              <h2 className="movie-title">{movie.movie}</h2>
              <p className="movie-rating">Rating: {movie.rating}</p>
              <span
                className="favorite-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleFavorite(movie));
                }}
              >
                {isFavorite(movie.id) ? '❤️' : '🤍'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

