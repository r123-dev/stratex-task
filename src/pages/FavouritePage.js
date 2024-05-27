// src/pages/FavoritesPage.js
import React from 'react';
import FavoritesList from '../components/FavouriteList';

const FavoritesPage = () => {
  return (
    <div className="favorites-page">
      <h1>Favorites</h1>
      <FavoritesList />
    </div>
  );
};

export default FavoritesPage;
