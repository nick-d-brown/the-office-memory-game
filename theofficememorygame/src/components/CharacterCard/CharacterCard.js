import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card" id={props.id} onClick={() => props.scoreChecker(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    {/* <span  onClick={() => props.deleteCharacter(props.id)} className="remove"></span> */}
  </div>
);

export default CharacterCard;
