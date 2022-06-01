import React from 'react';
import { connect } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import Nav from '../components/Nav';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Navigate to="/dashboard" />
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
