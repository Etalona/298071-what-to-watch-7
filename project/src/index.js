import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const nameFilm = 'The Grand Budapest Hotel';
const genreFilm = 'Drama';
const yearFilm = 2014;

ReactDOM.render(
  <React.StrictMode>
    {<App cards={cards} name={nameFilm} genre={genreFilm} year={yearFilm}/>}
  </React.StrictMode>,
  document.getElementById('root'));
