// src/components/CardInfo.jsx
import React from 'react';


const CardInfo = ({ card }) => {
  return (
    <div className="card-info">
      <h2>{card.name}</h2>
      <img src={card.image} alt={card.name} />
      <p><strong>Bedeutung:</strong> {card.meaning}</p>
      <p><strong>Meditation:</strong> {card.meditation}</p>
      <p><strong>Tipps:</strong> {card.tips}</p>
    </div>
  );
};

export default CardInfo;
