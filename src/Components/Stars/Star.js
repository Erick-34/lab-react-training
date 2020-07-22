import React from 'react';
import './star.css';

function Star(props) {
  const rounded = Math.round(Number(props.children));
  return (
    <div className="star-container">
      {[...Array(rounded)].map((el, i) => (
        <i key={i} className="fa fa-star" />
      ))}
      {[...Array(rounded)].map((el, i) => (
        <i key={i} className="fa fa-star-o" />
      ))}
    </div>
  );
}

export default Star;
