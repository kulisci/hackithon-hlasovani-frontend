import React from 'react';
import { Router, Switch } from 'react-router-dom';
import * as history from 'history';
import LandingPage from '../components/LandingPage';
import Voters from '../components/Voters';
import CustomRoute from '../routers/CustomRoute';
import SingleVote from '../components/SingleVote';

const createHistory = history.createBrowserHistory;

export const browHistory = createHistory();

const AppRouter = () => (
  <Router history={browHistory}>
    <>
      <Switch>
        <CustomRoute path="/" component={LandingPage} exact={true} />
        <CustomRoute path="/voters" component={Voters} />
        <CustomRoute path="/vote/:id" component={SingleVote} />
      </Switch>
    </>
  </Router>
);

export default AppRouter;
