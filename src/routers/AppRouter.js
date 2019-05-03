import React from 'react';
import { Router, Switch } from 'react-router-dom';
import * as history from 'history';
import LandingPage from '../components/LandingPage';
import Voters from '../components/Voters';
import CustomRoute from '../routers/CustomRoute';

const createHistory = history.createBrowserHistory;

export const browHistory = createHistory();

const AppRouter = () => (
  <Router history={browHistory}>
    <>
      <Switch>
        <CustomRoute path="/" component={LandingPage} exact={true} />
        <CustomRoute path="/voters" component={Voters} />
      </Switch>
    </>
  </Router>
);

export default AppRouter;
