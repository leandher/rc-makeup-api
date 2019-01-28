/* @flow */

import React, { Component } from 'react';
import {
  Route, BrowserRouter as Router, Switch, Redirect,
} from 'react-router-dom';

import { ProductsList, ProductDetail } from './Products';

class Navigator extends Component {
  renderScreens = () => (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Redirect
            to={{
              pathname: '/list',
            }}
          />
        )}
      />

      <Route exact path="/list" component={ProductsList} />
      <Route exact path="/list/:filter?" component={ProductsList} />

      <Route exact path="/detail" component={ProductDetail} />
      <Route exact path="/detail/:id" component={ProductDetail} />

      <Route path="/not-found" component={() => <p>NotFound</p>} />

      <Route
        exact
        path="/*"
        render={() => (
          <Redirect
            to={{
              pathname: '/not-found',
            }}
          />
        )}
      />
    </Switch>
  );

  render() {
    return (
      <Router>
        <div className="Navigator">
          <div className="Router">{this.renderScreens()}</div>
        </div>
      </Router>
    );
  }
}

Navigator.defaultProps = {};

export default Navigator;
