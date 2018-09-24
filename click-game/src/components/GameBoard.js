import React, { Component } from "react";
import Card from "./Card.js";
import players from "../players.json";

class GameBoard extends Component{

    clickHandle(id) {
        console.log(id)
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