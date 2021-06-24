export const getFilm = function(films, id) {
  const selectedFilm = films.find((film) => +film.id === (+id));
  return selectedFilm;
};


