import React from 'react';
import './App.css';
import Home from './pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import benchmark from './pages/benchmark';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/benchmark' component={benchmark} exact />
      </Switch>
    </Router>
  );
}

export default App;
