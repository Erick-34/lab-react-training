import React from 'react';
import './style.css';
import Rating from '../Stars/Star';

function DriverCard(props) {
  return (
    <div className="driver-container">
      <img src={props.img} alt="the driver" />
      <div>
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <span>
          {props.car.model} - {props.car.licensePlate}
        </span>
      </div>
    </div>
  );
}

export default DriverCard;
