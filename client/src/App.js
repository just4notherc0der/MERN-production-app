import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage';
import LoginPage from './components/pages/loginpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' exact component={ HomePage } />
        <Route path='/login' exact component={ LoginPage } />
      </div>
    );
  }
}

export default App;
