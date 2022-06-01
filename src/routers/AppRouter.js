import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {createBrowserHistory } from 'history';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';
import HomePage from '../components/HomePage';

export const history = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>    
      <Routes>
        <Route path="/" element={<HomePage/>} exact={true} />          
        <Route path="/404" element={<NotFoundPage/>} />
        <Route  element={<NotFoundPage/>} />
      </Routes>    
  </BrowserRouter>
);

export default AppRouter;
