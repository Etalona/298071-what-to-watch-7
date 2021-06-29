import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';
import Main from '../pages/main/main';
import SignIn from '../pages/signin/signin';
import MyList from '../pages/mylist/mylist';
import Film from '../pages/film/film';
import Review from '../pages/review/review';
import Player from '../pages/player/player';
import filmProp from '../card/card.prop';
import {getFilm} from '../../utils/utils';


function App(props) {
  const {films, name, genre, year} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <Main films={films} name={name} genre={genre} year={year} />
        </Route>
        <Route path="/login" exact component={SignIn} />
        <Route path="/mylist" exact >
          <MyList films={films} />
        </Route>
        <Route
          exact path={`${AppRoute.FILM}/:id`}
          render={(data) => (
            <Film
              film={getFilm(films, data.match.params.id)}
              films={films}
            />)}
        />
        <Route
          exact path={`${AppRoute.FILM}/:id/review`}
          render={(data) => (
            <Review
              film={getFilm(films, data.match.params.id)}
            />)}
        />
        <Route
          exact path={`${AppRoute.PLAYER}/:id`}
          render={(data) => (
            <Player
              film={getFilm(films, data.match.params.id)}
            />
          )}
        />
        <Route
          render={() => (
            <Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default App;
