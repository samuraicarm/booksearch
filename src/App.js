import React, { Component } from 'react';
import Header from './Header.js';
import Books from './Books';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header />
        <Books/>
      </div>
    );
  }
}

export default App;
