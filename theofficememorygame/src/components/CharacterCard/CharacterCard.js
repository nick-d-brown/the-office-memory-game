import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card" id={props.id} onClick={() => props.scoreChecker(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default CharacterCard;
