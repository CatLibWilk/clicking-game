import React from "react";


const Card = ({id, name, image, onClick}) => (

    <div className="col-3 float-left mb-4 img-div" key={id} name={name}>
    {/* <p>{name}</p> */}
        <img className="img" src={image} onClick={() => onClick(this.id)} alt=""></img>
    </div>
)
export default Card;