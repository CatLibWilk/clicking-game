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
      

      const score = this.state.score + 1;
      console.log(`${score} ||| ${this.state.score}`)
      if(score >= 12){
        alert("You win!");
        this.setState( {score: score} )
        this.gameReset(12);
        
      }
      this.setState( {score: score} )
      console.log(`${score} ||| ${this.state.score}`)
    }

    gameReset(passed){

      let scoreSave = null;

      
      let score = 0;

      console.log('game reset run')
      if(this.state.score > this.state.best){
        console.log('if')
        console.log(`if score = ${this.state.score}`);

          if(passed){
            console.log('was passed')
            scoreSave = parseInt(passed);

          }else{
          scoreSave = this.state.score
          }

      this.setState( {
        score: score,
        best: scoreSave} )

      }else{
        console.log('else')
        this.setState( {score: score} )
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
