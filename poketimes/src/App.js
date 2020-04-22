import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Route path = '/' Component={Home}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
