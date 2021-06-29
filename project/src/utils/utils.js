export const getFilm = function(films, id) {
  const selectedFilm = films.find((film) => film.id === parseInt(id, 10));
  return selectedFilm;
};


