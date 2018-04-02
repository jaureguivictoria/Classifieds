
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import Master from './components/Master';
import CreateAd from './components/CreateAd';
import DisplayAd from './components/DisplayAd';
import UpdateAd from './components/UpdateAd';


render(
  <Router history={browserHistory}>
      <Route path="/" component={Master} >
        <Route path="/add-item" component={CreateAd} />
        <Route path="/display-item" component={DisplayAd} />
        <Route path="/edit/:id" component={UpdateAd} />
      </Route>
    </Router>,
        document.getElementById('crud-app'));