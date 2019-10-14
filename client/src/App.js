import React from 'react';
import './App.css';
import { Landing } from './views/Landing';
import { Login } from './views/Login';

import { Router, Route } from 'react-router-dom';
import history from './history'

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Landing}/>
      <Route path="/login" component={Login}/>
    </Router>
  );
}

export default App;
