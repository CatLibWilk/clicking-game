import React, { Component } from "react";
import Card from "./Card.js";

class GameBoard extends Component{

    renderCard(i) {
        return (
          <Card key={i}/>

        );
      }
    render(){
        return(
            <div className="col-10 col-10 text-center mx-auto">
                 <div className="board-row row">
                    {this.renderCard(0)}
                    {this.renderCard(1)}
                    {this.renderCard(2)}

                </div>

                 <div className="board-row row">
                    {this.renderCard(3)}
                    {this.renderCard(4)}
                    {this.renderCard(5)}

                </div>

                 <div className="board-row row">
                    {this.renderCard(6)}
                    {this.renderCard(7)}
                    {this.renderCard(8)}

                </div>

            </div>
        )
    }
}

export default GameBoard;