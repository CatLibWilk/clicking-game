import React from "react";


const Card = props => (

    <div className="col-3 p-2 float-left" key={props.id} name={props.name}>
        <img className="img-thumbnail img-fluid" src={props.image}></img>
    </div>
)
export default Card;