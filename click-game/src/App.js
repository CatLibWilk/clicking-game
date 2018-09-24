import React, { Component } from 'react';
import Navbar from "./components/Navbar.js";
import GameBoard from "./components/GameBoard.js";
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <GameBoard />
      </div>
    );
  }
}

export default App;
