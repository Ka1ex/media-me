import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import HomeTiles from './Component/HomeTiles/HomeTiles';

class App extends Component {
  render() {
    return (
      <div id="navbar">
        <div>
          <Navbar />
        </div>

        <div id="homeTiles">
          <HomeTiles />
        </div>

      </div>  
    );
  }
}

export default App;
