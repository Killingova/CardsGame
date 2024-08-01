// src/components/CardDisplay.jsx
import React from 'react';

const CardDisplay = ({ card }) => (
  <div className="card-display">
    <img src={card.image} alt={card.name} />
    <h3>{card.name}</h3>
  </div>
);

export default CardDisplay;
