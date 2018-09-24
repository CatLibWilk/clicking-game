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
      console.log("update score")
      // const updatedScore = this.state.score++;
      // this.setState({score: updatedScore})
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
