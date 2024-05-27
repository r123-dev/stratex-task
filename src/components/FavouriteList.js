// // src/components/FavoritesList.js
// import React from 'react';
// import { useSelector } from 'react-redux';
// import MovieCard from './MovieCard';

// const FavoritesList = () => {
//   const favorites = useSelector((state) => state.movies.favorites);

//   return (
//     <div className="favorites-list">
//       {favorites.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// };

// // export default FavoritesList;
// import React from 'react';
// import { useSelector } from 'react-redux';
// import MovieCard from './MovieCard';
// import './FavouriteMovie.css'
// const FavoritesList = () => {
//   const favorites = useSelector((state) => state.movies.favorites);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//       {favorites.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default FavoritesList;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/movieSlice';
import './FavouriteMovie.css';
import './MovieCard.css';

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
            <img src={movie.image} alt={movie.movie} className="favorite-movie-image" />
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
                ★
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovies;
