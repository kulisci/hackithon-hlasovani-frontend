import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Helmet from 'react-helmet';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (
      <div>
        <Helmet bodyAttributes={{style: 'background-color:lightgray; margin: 0;'}}/>
        <Header />
        <Component {...props} />
      </div>
    )}
  />
);
