import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';
import films from './mocks/films';
import reviews from './mocks/review';
import {reducer} from './store/reducer';

const nameFilm = 'The Grand Budapest Hotel';
const genreFilm = 'Drama';
const yearFilm = 2014;

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films={films}
        reviews={reviews}
        name={nameFilm}
        genre={genreFilm}
        year={yearFilm}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
