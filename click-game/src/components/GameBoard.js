import React, { Component } from "react";
import Card from "./Card.js";
import players from "../players.json";

class GameBoard extends Component{

    renderCard(i) {
        return (
            players.map( player => 
                <Card id={player.id} name={player.name} image={player.image} />
            )
        );
      }
    render(){
        return(
            <div className="col-10 mt-5 p-3 text-center justify-content-center mx-auto">
                 {this.renderCard()}

            </div>
        )
    }
}

export default GameBoard;