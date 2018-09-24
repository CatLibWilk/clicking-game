import React, { Component } from 'react';
import Navbar from "./components/Navbar.js";
import GameBoard from "./components/GameBoard.js";
import Jumbo from "./components/Jumbo.js";
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          score: 0
      }
    }

    updateScore(){
      console.log("running")

      const score = this.state.score + 1;

      this.setState( {score} )
    }

  render() {
    return (
      <div>
        <Navbar score={this.state.score}/>
        <Jumbo />
        <GameBoard updateScore={() => this.updateScore()}/>
      </div>
    );
  }
}

export default App;
