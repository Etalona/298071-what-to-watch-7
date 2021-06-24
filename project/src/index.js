import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import comments from './mocks/review';

const nameFilm = 'The Grand Budapest Hotel';
const genreFilm = 'Drama';
const yearFilm = 2014;

ReactDOM.render(
  <React.StrictMode>
    {<App films={films} comments={comments} name={nameFilm} genre={genreFilm} year={yearFilm}/>}
  </React.StrictMode>,
  document.getElementById('root'));
