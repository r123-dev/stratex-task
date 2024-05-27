// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleFavorite } from '../redux/movieSlice';

// const MovieCard = ({ movie }) => {
//   const dispatch = useDispatch();
//   const favorites = useSelector((state) => state.movies.favorites);

//   const isFavorite = favorites.some(fav => fav.id === movie.id);

//   const handleFavoriteClick = () => {
//     dispatch(toggleFavorite(movie));
//   };

//   return (
//     <div className="movie-card">
//       <img src={movie.image} alt={movie.movie} />
//       <h3>{movie.movie}</h3>
//       <p>Rating: {movie.rating}</p>
//       <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">IMDb</a>
//       <button onClick={handleFavoriteClick}>
//         {isFavorite ? 'Unfavorite' : 'Favorite'}
//       </button>
//     </div>
//   );
// };

// export default MovieCard;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/movieSlice';
import './MovieCard.css'
const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);

  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(movie));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={movie.image} alt={movie.movie} />
      <div className="p-4">
        <h3 className="text-lg font-bold">{movie.movie}</h3>
        <p className="text-gray-600">Rating: {movie.rating}</p>
        <a className="text-blue-500 hover:underline" href={movie.imdb_url} target="_blank" rel="noopener noreferrer">IMDb</a>
        <button
          className={`mt-2 p-2 w-full ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'} rounded`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
