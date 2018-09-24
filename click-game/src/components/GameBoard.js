import React, { Component } from "react";
import Card from "./Card.js";
import players from "../players.json";

class GameBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            players
        }
    }

    clickHandle(id) {
        this.props.updateScore()
        const players = this.state.players.filter(player => {
            if(player.id !== id){return true}
        });



        this.setState( {players} )
    }

    render(){
        return(
            <div className="col-10 mt-5 p-3 text-center justify-content-center mx-auto">
                 {players.map( ({id, name, image}) => 
                <Card key={id} name={name} image={image} onClick={() => this.clickHandle(id)}/>
            )}

            </div>
        )
    }
}

export default GameBoard;