import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Signup from './containers/Signup'
import Signin from './containers/Signin'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/signin' component={Signin}></Route>
        <Route path='/signup' component={Signup}></Route>

      </Switch>
    </Router>
  );
}

export default App;
