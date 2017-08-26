import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import login from './components/login'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Main</h1>
          <Route exact path="/" component={login}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
