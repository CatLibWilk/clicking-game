import React from "react";


const Card = ({id, name, image, onClick}) => (

    <div className="col-3 p-2 float-left" key={id} name={name}>
        <img className="img-thumbnail img-fluid" src={image} onClick={() => onClick(this.id)} alt=""></img>
    </div>
)
export default Card;