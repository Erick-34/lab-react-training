import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className="card-container">
      <img src={props.picture} />
      <div classname="fisrtname">
        <label><strong>FirstName: </strong></label>
        <span>{props.firstName}</span>
      </div>
      <div classname="lastname">
        <label><strong>LastName: </strong></label>
        <span>{props.lastName}</span>
      </div>
      <div classname="gender">
        <label><strong>Gender: </strong></label>
        <span>{props.gender}</span>
      </div>
      <div classname="height">
        <label><strong>Height: </strong></label>
        <span>{props.height / 100}m</span>
      </div>
      <div classname="birth">
        <label><strong>Birth: </strong></label>
        <span>{props.birth.toDateString()}</span>
      </div>
    </div>
  );
}

export default Card;
