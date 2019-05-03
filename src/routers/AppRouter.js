import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LandingPage from '../components/LandingPage';
import Voters from '../components/Voters';
import CustomRoute from '../routers/CustomRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <>
      <Switch>
        <CustomRoute path="/" component={LandingPage} exact={true} />
        <CustomRoute path="/voters" component={Voters} />
      </Switch>
    </>
  </Router>
);

export default AppRouter;
