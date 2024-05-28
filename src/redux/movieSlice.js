import { createSlice } from '@reduxjs/toolkit';
// require('dotenv').config({path: '.../.env'})
const initialState = {
  movies: [],
  favoriteMovies: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    toggleFavorite(state, action) {
      const movie = action.payload;
      const existingIndex = state.favoriteMovies.findIndex(m => m.id === movie.id);
      if (existingIndex >= 0) {
        state.favoriteMovies.splice(existingIndex, 1);
      } else {
        state.favoriteMovies.push(movie);
      }
    },
  },
});

export const { setMovies, toggleFavorite } = movieSlice.actions;

// Add fetchMovies action creator
export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await fetch(`https://dummyapi.online/api/movies`);
    const data = await response.json();
    dispatch(setMovies(data));
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

export default movieSlice.reducer;

