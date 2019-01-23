import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';
import HomePage from '../components/HomePage';
import Nav from '../components/Nav';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Nav/>
      <Switch>
        <PublicRoute path="/" component={HomePage} exact={true} />          
        <Route path="/404" component={NotFoundPage} />
        <Route  component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
