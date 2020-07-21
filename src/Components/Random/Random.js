import React from 'react';
import './random.css';

function Random(props) {
  function generate({ min, max }) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="random">
      {`Random value between ${props.min} and ${props.max} => ${generate({
        min: props.min,
        max: props.max,
      })}`}
    </div>
  );
}

export default Random;
