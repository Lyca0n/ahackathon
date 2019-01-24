import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Nav from '../components/Nav';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
          <div> 
          <Nav/>                     
          <Component {...props} />
          </div>
        )
    )} />
  );

;

export default connect()(PublicRoute);
