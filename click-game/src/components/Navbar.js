import React, { Component } from "react";

class Navbar extends Component {

    render(){
        return(

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <h1 class="navbar-brand">ClickMaster Ultra+</h1>

                <div class="col-4 ml-auto">
                    <div class="col-6 float-left mx-auto" id="current-score-div">
                        <h3>Current Score: </h3>
                    </div>

                    <div class="col-6 float-left mx-auto" id="top-score-div">
                        <h3>Top Score: </h3>
                    </div>
                </div>
            </nav>
            
        )
    }
}



export default Navbar;