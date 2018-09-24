import React, { Component } from 'react';
import Navbar from "./components/Navbar.js";
import GameBoard from "./components/GameBoard.js";
import Jumbo from "./components/Jumbo.js";
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          score: 0,
          best: 0
      }
    }

    updateScore(){
      console.log("running")

      const score = this.state.score + 1;

      this.setState( {score: score} )

    }

    gameReset(){
      const score = 0;

      if(this.state.score > this.state.best){
        const scoreSave = this.state.score
      
      this.setState( {
        score: score,
        best: scoreSave} )
      }else{
        this.setState( {score:score} )
      }

    }


  render() {
    return (
      <div>
        <Navbar score={this.state.score} best={this.state.best}/>
        <Jumbo />
        <GameBoard updateScore={() => this.updateScore()} gameReset={() => this.gameReset()}/>
      </div>
    );
  }
}

export default App;
