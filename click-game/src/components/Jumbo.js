import React, { Component } from "react";

class Jumbo extends Component{
    render(){
        return(
            <div className="jumbotron jumbotron-fluid">
                 <div className="container">
                    <h1 className="display-4">ClickMaster Ultra+</h1>
                    <p className="lead">Click each image, but only once!</p>
                </div>
            </div>
        )
    }
}


export default Jumbo;