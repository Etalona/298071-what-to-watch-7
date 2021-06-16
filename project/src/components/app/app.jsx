import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../pages/main/main';
import SignIn from '../pages/signin/signin';
import MyList from '../pages/mylist/mylist';
import Film from '../pages/film/film';
import Review from '../pages/review/review';
import Player from '../pages/player/player';
export default App;

function App(props) {
  const {cards, name, genre, year} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <Main cards={cards} name={name} genre={genre} year={year} />
        </Route>
        <Route path="/login" exact component={SignIn} />
        <Route path="/mylist" exact component={MyList} />
        <Route path="/film/:id" exact component={Film} />
        <Route path="/film/:id/review" exact component={Review} />
        <Route path="/player/:id" exact component={Player} />
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
  cards: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

