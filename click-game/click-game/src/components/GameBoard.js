import React, { Component } from "react";
import Card from "./Card.js";
import players from "../players.json";

let stable = players;


class GameBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            players
        }
    }

    shuffle() {
        let shuffled = stable
            .map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)

            stable = shuffled;
        
        } 

    clickHandle(id) {

        const updatePlayers = this.state.players.filter(player => {
            if(player.id !== id){return true}
            
        });

        if(updatePlayers.length === this.state.players.length){
            alert("you lose!");
            this.props.gameReset();
            this.setState( {players: players} )
            console.log(this.state)


        }else{
            this.props.updateScore();
            this.setState( {players: updatePlayers} )

        }
        this.shuffle();
    }

    render(){
        return(
            <div className="col-10 mt-5 mb-5 p-3 text-center justify-content-center mx-auto">
                
                {stable.map( ({id, name, image}) => 
                <Card key={id} name={name} image={image} onClick={() => this.clickHandle(id)}/>
            )}

            </div>
        )
    }
}

export default GameBoard;