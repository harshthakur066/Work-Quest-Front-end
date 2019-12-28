import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch}  from 'react-router-dom'

import HomeComponent from './Workquest/home.js'
import Dashboard from './Workquest/dashboard.js'
import Notfound from './Workquest/notfound.js'

// const routing = (
//
// );
ReactDOM.render(
  <Router>
    <Route  exact path="/" component={HomeComponent} />
    <Route path="/dashboard" component={Dashboard} />
</Router>, document.getElementById('app'));
