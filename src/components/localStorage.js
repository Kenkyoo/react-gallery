import { useState, useEffect } from 'react';

// Función para guardar imágenes en el localStorage
export const saveImageToLocalStorage = (image) => {
  let savedFavourites = JSON.parse(localStorage.getItem('savedImages')) || [];
  savedFavourites.push(image);
  localStorage.setItem('savedImages', JSON.stringify(savedFavourites));
};

// Hook para obtener las imágenes favoritas del localStorage
export default function useFavourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem('savedImages')) || [];
    setFavourites(savedFavourites);
  }, []);

  return [favourites, setFavourites];
}

export  function clearFavourites() {
    localStorage.removeItem('savedImages');
  }