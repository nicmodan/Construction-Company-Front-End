import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './api/login/login';
import Account from './api/account/account';
import Profile from './api/profiles'


// import reportWebVitals from './reportWebVitals';

// const auth = window.localStorage.getItem('userInfoAndToken')
// const validatAuth = auth ? true : false

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/account' component={Account} />
      <Route exact path='/profiles' component={Profile} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
