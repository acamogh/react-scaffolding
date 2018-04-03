import React from 'react';
import { Route, IndexRoute } from 'react-router';
import axios from 'axios';

// Containers
import CommonContainer from './containers/CommonContainer';

// Dashboard Components
export const isLoggedIn = (nextState, replace) => {
  if (localStorage.accessToken) {
    axios.defaults.headers.common['x-access-token'] = localStorage.accessToken;
  }
  window.scrollTo(0, 0);
  const userId = localStorage.getItem('userId');
  let authData = localStorage.getItem('authData');
  authData = authData ? JSON.parse(authData) : '';
  if (!(userId && authData && authData.phone && authData.phoneVerified)) {
    replace({
      pathname: '/'
    });
  }
};
export const scrollToTop = () => {
  if (localStorage.accessToken) {
    axios.defaults.headers.common['x-access-token'] = localStorage.accessToken;
  }
  window.scrollTo(0, 0);
}

import Home from './components/Home';
import index from './components/index/index.jsx';


export default (
  <Route path="/" component={Home}>
    <IndexRoute component={CommonContainer(index)}/>
      
      <Route path="index" onEnter={scrollToTop} component={CommonContainer(index)}  />
      
  </Route>
);
