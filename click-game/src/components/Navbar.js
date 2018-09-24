import React, { Component } from "react";

class Navbar extends Component {

    render(){
        return(

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand">ClickMaster Ultra+</h1>

                <div className="col-4 ml-auto">
                    <div className="col-6 float-left mx-auto" id="current-score-div">
                        <h3>Current Score: </h3>
                    </div>

                    <div className="col-6 float-left mx-auto" id="top-score-div">
                        <h3>Top Score: </h3>
                    </div>
                </div>
            </nav>
            
        )
    }
}



export default Navbar;